import React from "react";
import SkipTo from "@/components/skipTo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer-content p-0 mx-auto lg:ml-4 w-full max-w-4xl min-h-[calc(100vh-4rem)]">
      <main id="main-content" className="pt-8 pb-20 px-8 w-full">
        {children}
      </main>
    </div>
  );
}

function Drawer({ children }: { children: React.ReactNode }) {
  return (
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
      <MainContent>{children}</MainContent>
    </div>
  );
}

interface LayoutProps {
  hideNav?: boolean;
  children: React.ReactNode;
}

export default function Layout({ hideNav, children }: LayoutProps) {
  return (
    <>
      <SkipTo idTo="main-content">Skip to content</SkipTo>
      <Header hideNav={hideNav} />
      {hideNav ? (
        <MainContent>{children}</MainContent>
      ) : (
        <Drawer>{children}</Drawer>
      )}
      <div className="border-base-300 border-t">
        <Footer />
      </div>
    </>
  );
}
