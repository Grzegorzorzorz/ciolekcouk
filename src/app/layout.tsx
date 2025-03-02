import "../components/header";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import SkipTo from "@/components/skipTo";

import "./tailwind.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/favicon/favicon-48x48.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "167x167",
      url: "/favicon/favicon-167x167.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/favicon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/favicon-192x192.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SkipTo idTo="main-content">Skip to content</SkipTo>
        <Header />
        <div className="drawer lg:drawer-open">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side z-20 min-h-fit h-[calc(100vh-4rem)] top-16">
            <label
              htmlFor="nav-drawer"
              aria-label="close sidebar"
              className="drawer-overlay print:hidden"
            ></label>
            <aside className="bg-base-100 overflow-y-auto min-h-fit h-[calc(100vh-4rem)] min-w-72 lg:overflow-y-visible lg:z-10 lg:min-h-0 lg:min-w-64 lg:h-fit">
              <div>
                <Nav />
                <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-20 [mask-image:linear-gradient(transparent,#000000)]"></div>
              </div>
            </aside>
          </div>
          <div className="drawer-content border-base-300 p-0 mx-auto lg:ml-4 w-full max-w-4xl min-h-[calc(100vh-4rem)]">
            <main id="main-content" className="pt-8 pb-20 px-8 w-full">
              {children}
            </main>
          </div>
        </div>
        <div className="border-base-300 border-t">
          <Footer />
        </div>
      </body>
    </html>
  );
}
