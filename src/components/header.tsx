export default function Header() {
  return (
    <header className="z-30 sticky top-0 navbar bg-base-100 shadow-lg lg:px-4">
      <div className="navbar-start sm:w-fit ml-2 lg:hidden">
        <label
          htmlFor="nav-drawer"
          className="btn btn-ghost btn-square px-0 drawer-button mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-7 w-7 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="navbar-center md:navbar-start">
        <span className="text-4xl font-bold align-middle text-left print:pl-0 sm:block hidden">
          Grzegorz Ciołek
        </span>
        <span className="text-4xl font-bold align-middle text-center print:pl-0 sm:hidden">
          G. Ciołek
        </span>
      </div>
      <div className="navbar-end"></div>
    </header>
  );
}
