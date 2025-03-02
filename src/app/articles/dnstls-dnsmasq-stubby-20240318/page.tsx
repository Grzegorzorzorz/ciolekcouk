import { Metadata } from "next";

import LinkExtern from "@/components/linkExtern";
import Prose from "@/components/prose";

export const metadata: Metadata = {
  title: "DoT: Setting up DNS over TLS on OpenRC",
};

export default function Article() {
  return (
    <article>
      <Prose>
        <section>
          <h1>DoT: Setting up DNS over TLS on OpenRC</h1>
          <p>
            A few weeks ago I set up DNS over TLS (DoT) on my OpenRC Gentoo
            machine, and want to share the process since it's not as straight
            forward as on a systemd based system.
          </p>
          <p>
            DoT is a mechanism for encrypting DNS traffic via TLS, which
            provides a layer of privacy against man in the middle attacks. This
            does not hide the IP addresses you are accessing, but it's a lot
            better than no encryption at all.
          </p>
        </section>
        <section>
          <h2 id="overview">
            <a href="#overview">Overview</a>
          </h2>
          <p>The basic steps are as follows:</p>
          <ul>
            <li>
              Set up{" "}
              <LinkExtern href="https://dnsmasq.org/doc.html">
                Dnsmasq
              </LinkExtern>
            </li>
            <li>
              Set up{" "}
              <LinkExtern href="https://dnsprivacy.org/dns_privacy_daemon_-_stubby/">
                Stubby
              </LinkExtern>
            </li>
            <li>Configure DNS for system connections</li>
          </ul>
        </section>
        <section>
          <h2 id="dnsmasq-setup">
            <a href="#dnsmasq-setup">Setting up Dnsmasq</a>
          </h2>
          <p>
            I believe that Dnsmasq is not strictly necessary for this setup, but
            it provides a few key benefits, namely DNS caching, which reduces
            latency significantly: ~300ms after the first resolution of a given
            domain, so I highly recommend you use it.
          </p>
          <p>
            The first step is to install Dnsmasq. On a Gentoo system, that would
            look something like this:
          </p>
          <pre>
            <code>emerge -av net-dns/dnsmasq</code>
          </pre>
          <p>
            It will likely be installed with a default configuration file; I
            recommend that you back up/rename it, since we'll be creating a new
            one from scratch.
          </p>
          <section>
            <h3 id="dnsmasq-config">
              <a href="#dnsmasq-config">Configuration</a>
            </h3>
            <p>
              In my case <code>/etc/dnsmasq.conf</code> contains the following:
            </p>
            <pre>
              <code>{`no-resolv
server=127.0.0.1#53000
listen-address=127.0.0.1
interface=lo
bind-interfaces`}</code>
            </pre>
            <p>
              <code>no-resolv</code> instructs Dnsmasq to not use
              <code>/etc/resolv.conf</code>, which in my case is auto generated
              by NetworkManager, and would point back to Dnsmasq.
            </p>
            <p>
              The other lines instruct Dnsmasq to forward DNS requests to
              Stubby, which we will set up to use port 53000, though you can opt
              to use a diffrent port if that is unavailable on your system. Make
              sure that you do not use port 53, as that is what Dnsmasq uses.
            </p>
          </section>
        </section>
        <section>
          <h2 id="stubby-setup">
            <a href="#stubby-setup">Setting up Stubby</a>
          </h2>
          <p>
            Stubby is the DNS resolver that I use for DoT, namely for the that
            fact it supports it.
          </p>
          <p>
            If using Gentoo like me, make sure you enable the
            <code>stubby</code> USE flag for <code>net-dns/getdns</code>, and
            then install like normal:
          </p>
          <pre>
            <code>emerge -av net-dns/getdns</code>
          </pre>
          <h3 id="stubby-config">
            <a href="#stubby-config">Configuration</a>
          </h3>
          <p>
            Stubby is configured in <code>/etc/stubby/stubby.yml</code>.
            Similarly to Dnsmasq, it may be a good idea to back up/rename the
            original configuration.
          </p>
          <p>
            I've left a few notes underneath the configuration on options that
            you way want to change depending on your use case.
          </p>
          <p>
            For my configuration I use{" "}
            <LinkExtern href="https://libredns.gr">LibreDNS</LinkExtern>, so
            adapt as necessary:
          </p>
          <pre>
            <code>{`log_level: GETDNS_LOG_NOTICE
resolution_type: GETDNS_RESOLUTION_STUB
dns_transport_list:
  - GETDNS_TRANSPORT_TLS

tls_authentication: GETDNS_AUTHENTICATION_REQUIRED
tls_query_padding_blocksize: 128

edns_client_subnet_private : 1

round_robin_upstreams: 0

idle_timeout: 10000

listen_addresses:
  - 127.0.0.1@53000
  - 0::1@53000

# Change to fit the settings given by your provider.
# Can have as many DNS providers as you want.
upstream_recursive_servers:
  - address_data: 116.202.176.26
    tls_auth_name: "dot.libredns.gr"`}</code>
          </pre>
          <h4>
            <code>edns_client_subnet_private</code>
          </h4>
          <p>
            This option I <em>strongly</em> suggest you leave as is. When
            <code>0</code>, it enables support for resolvers that send ECS,
            which supports better geolocation of content at the expense of
            revealing a portion of your IP address to authoritative servers,
            which provides some fingerprinting potential.
          </p>
          <p>
            If set to <code>1</code>, it avoids this issue, but content may not
            be as geographically relevant. I recommend this and setting search
            engine options instead.
          </p>
          <h4>
            <code>round_robin_upstreams</code>
          </h4>
          <p>
            If you only have servers that you trust equally, you can set this to
            <code>1</code> instead, since it will distribute queries between
            them.
          </p>
          <p>
            If you have one or two that you trust fully, and then some backups
            that are a bit less privacy respecting, you'll want to keep this as
            <code>0</code>, and order them from most trustworthy to least.
          </p>
          <h4>
            <code>listen_addresses</code>
          </h4>
          <p>
            If you can't use port 53000 for Stubby, change it to the number you
            set in
            <code>/etc/dnsmasq.conf</code>
          </p>
          <h2 id="dns-config">
            <a href="#dns-config">Configuring DNS for system connections</a>
          </h2>
          <p>
            Now that everything is set up, we can enable Dnsmasq and Stubby to
            start at boot:
          </p>
          <pre>
            <code>{`rc-update add dnsmasq default
rc-update add stubby default`}</code>
          </pre>
          <p>And then start them:</p>

          <pre>
            <code>{`rc-service dnsmasq start
rc-service stubby start`}</code>
          </pre>
          <p>
            This next part will differ depending on what system you use to
            manage your network connections. As I use NetworkManager, I need to
            change the
            <code>[ipv4]</code> sections in my <code>.nmconnection</code> files
            in
            <code>/etc/NetworkManager/system-connections/</code> from this:
          </p>
          <pre>
            <code>{`[ipv4]
method=auto`}</code>
          </pre>
          <p>To this:</p>
          <pre>
            <code>{`[ipv4]
dns=127.0.0.1;
ignore-auto-dns=true
method=auto`}</code>
          </pre>
          <p>
            ipv6 would require additional configuration, however my ISP does not
            provide it, and so I wouldn't be able to put instructions here in
            good faith. Please consult the documentation of your network
            management service.
          </p>
          <p>
            I imagine the process is similar on wpa_supplicant or iwl, but
            you'll need to consult their documentation.
          </p>
          <p>
            At this point, you can restart your network management service, or
            reboot, and it should work. In my case:
          </p>
          <pre>
            <code>rc-service NetworkManager restart</code>
          </pre>
        </section>
        <section>
          <h2 id="summary">
            <a href="#summary">Summary</a>
          </h2>
          <p>
            We have now set up Dnsmasq to use Stubby as a resolver, configured
            our connections to use our local Dnsmasq server for DNS resolution,
            and have DNS over TLS for all outgoing DNS queries, providing an
            additional layer of privacy to our network stack.
          </p>
        </section>
      </Prose>
    </article>
  );
}
