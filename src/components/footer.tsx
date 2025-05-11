import AberWebRing from "./webring";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-100 print:hidden p-8">
      <aside>
        <p>Copyright &copy; {new Date().getFullYear()} Grzegorz Ciołek</p>
        <p className="font-light">
          This website is distributed under the{" "}
          <a className="underline" href="/licence">
            MIT Licence
          </a>
          .
        </p>
        <p className="font-light">
          Third-party works are distributed under{" "}
          <a className="underline" href="/licence/third-party">
            various licences
          </a>
          .
        </p>
      </aside>
      <nav>
        <AberWebRing />
      </nav>
    </footer>
  );
}
