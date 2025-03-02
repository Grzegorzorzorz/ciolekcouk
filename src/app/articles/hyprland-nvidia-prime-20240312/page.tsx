import LinkExtern from "@/components/linkExtern";
import Prose from "@/components/prose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyprland: Nvidia PRIME and suspend issues",
};

export default function Article() {
  return (
    <article>
      <Prose>
        <section>
          <h1>Hyprland: Nvidia PRIME and suspend issues</h1>
          <p>
            Up until the beginning of March, Hyprland ran brilliantly on my
            system with Nvidia proprietary drivers.
          </p>
          <p>Then it didn't.</p>
          <p>
            I didn't end up finding exactly what caused the breakage, likely an
            update, or a combination of several, but it ultimately caused a few
            fairly major issues; some applications would only redraw frames when
            resized, and the compositor would freeze on resume, which could only
            be salvaged with Magic SysReq. Not ideal.
          </p>
          <p>
            For reference, I run a Gentoo Linux system on the
            <LinkExtern href="https://rog.asus.com/uk/laptops/rog-strix/rog-strix-scar-17-se-2022-series/">
              ASUS ROG Strix Scar 17 SE (2022)
            </LinkExtern>
            , which has an RTX 3080Ti Mobile GPU. My particular setup uses
            OpenRC instead of systemd, so the suspend issues likely have a
            slightly different solution on systemd setups.
          </p>
        </section>
        <section>
          <h2 id="suspend-issues">
            <a href="#suspend-issues">Suspend issues</a>
          </h2>
          <p>
            The first issue I opted to tackle was the suspend issue, since it
            caused fairly significant issues to me as a student who has to move
            a laptop between lecture theatres.
          </p>
          <p>
            My first step in identifying the Nvidia drivers as the culprit was
            to run my system without out-of-tree modules, which, as expected,
            resulted in faultless suspend and resume.
          </p>
          <p>
            After a lot of research, I found the following script for properly
            suspending and resuming the Nvidia card, to be installed in
            <code>/lib64/elogind/system-sleep/</code>:
          </p>
          <pre>
            <code>
              {`#!/bin/sh

case $"{1-}" in
		'pre')
			/usr/bin/nvidia-sleep.sh suspend
				;;

		'post')
			/usr/bin/nvidia-sleep.sh resume &;
				;;
		*)
			exit 1
				;;
esac`}
            </code>
          </pre>
          <p>
            Which did fix the sleep and resume issues, though did not help with
            the compositor drawing issues.
          </p>
          <p>
            For my systemd friends, I think you might be able to use the
            <LinkExtern href="https://download.nvidia.com/XFree86/Linux-x86_64/435.17/README/powermanagement.html">
              nvidia-suspend, nvidia-hibernate, and nvidia-resume
            </LinkExtern>{" "}
            services, though I haven't looked too far into those.
          </p>
        </section>
        <section>
          <h2 id="drawing-issues">
            <a href="#drawing-issues">Hyprland drawing issues</a>
          </h2>
          <p>
            Up until the issues started to present, I used a fairly lax NVIDA
            configuration in Hyprland, as it seemed to work without the need for
            much configuration. Though once the issues became apparent, this
            changed quite drastically.
          </p>
          <p>
            The solution for this problem is fairly simple in retrospect, though
            it does go against the general advice of the Hyprland documentation
            on Nvidia, which mostly assumes that users want to run everything on
            the dGPU, which is not ideal for optimus laptop users, where
            conserving battery life is a priority.
          </p>
          <p>My config, GPU-wise, went from something like this:</p>
          <pre>
            <code>
              {`env = WLR_DRM_DEVICES,/dev/dri/by-name/intel-uhd-770:/dev/dri/by-name/nvidia-3080-ti-laptop
env = WLR_NO_HARDWARE_CURSORS,1`}
            </code>
          </pre>
          <p>To this:</p>
          <pre>
            <code>
              {`env = WLR_DRM_DEVICES,/dev/dri/by-name/intel-uhd-770
env = WLR_NO_HARDWARE_CURSORS,1

env = DXVK_FILTER_DEVICE_NAME,Intel
env = VKD3D_FILTER_DEVICE_NAME,Intel
env = MESA_VK_DEVICE_SELECT,8086:a788
env = __GLX_VENDOR_LIBRARY_NAME,mesa
env = __EGL_VENDOR_LIBRARY_FILENAMES,/usr/share/glvnd/egl_vendor.d/50_mesa.json
env = __NV_PRIME_RENDER_OFFLOAD,0
env = __VK_LAYER_NV_optimus,non_NVIDIA_only
env = LIBVA_DRIVER_NAME,iHD
env = VDPAU_DRIVER,va_gl`}
            </code>
          </pre>
          <p>
            What this does is instruct Hyprland to not use the dGPU at all, and
            to render exclusively on the iGPU. Now this change does mean that we
            have to implement a modified <code>prime-run</code> wrapper script
            that does the opposite:
          </p>
          <pre>
            <code>{`#!/bin/bash
export GBM_BACKEND="nvidia-drm"
export DXVK_FILTER_DEVICE_NAME="NVIDIA"
export VKD3D_FILTER_DEVICE_NAME="NVIDIA"
export __EGL_VENDOR_LIBRARY_FILENAMES="/usr/share/glvnd/egl_vendor.d/10_nvidia.json"
export VK_ICD_FILENAMES="/usr/share/vulkan/icd.d/nvidia_icd.json"
export VK_LOADER_DRIVERS_SELECT="*nvidia*"
export __NV_PRIME_RENDER_OFFLOAD="1"
export __VK_LAYER_NV_optimus="NVIDIA_only"
export __GLX_VENDOR_LIBRARY_NAME="nvidia"
export WLR_NO_HARDWARE_CURSORS=1
unset MESA_VK_DEVICE_SELECT
"$@"`}</code>
          </pre>
          <p>
            This sets basically every environment variable we can to make the
            wrapped executable use our dGPU to render instead of the iGPU, and
            from the testing I've done, it works very well. It should be said,
            however, that I cannot attest to the longevity of this solution, but
            I hope it works for the foreseeable future. I'll likely throw a new
            solution here if not.
          </p>
          <p>
            A side effect I noticed from this is that Hyprland no longer appears
            as a running process on <code>nvidia-smi</code>.
          </p>
          <p>
            This solution came from an Arch Forums post that I sadly forgot to
            bookmark, so if you recognise this solution, please get in touch so
            I can give credit where due!
          </p>
        </section>
        <section>
          <h3 id="further-issues">
            <a href="#further-issues">Further issues</a>
          </h3>
          <p>
            One intermittent issue that I am yet to find a fix for is that
            sometimes the cursor does not render on applications run on the
            Nvidia dGPU. I'm not yet certain of the cause and it's intermittent;
            it sometimes affects an application, and it sometimes doesn't. I'll
            probably create a new article if I find the root cause.
          </p>
        </section>
      </Prose>
    </article>
  );
}
