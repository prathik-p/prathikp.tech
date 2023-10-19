function Navbar() {
  return (
    <>
      <div>
        <div className="md:navbar bg-inherit  ">
          <div className="navbar-start"></div>
          <div className="navbar-center  ">
            <ul className="md:space-x-16">
              <a className="btn btn-ghost no-animation text-xs md:text-xl">
                Projects
              </a>
              <a className="btn btn-ghost no-animation md:text-xl text-xs ">
                About
              </a>
              <a className="btn btn-ghost no-animation md:text-xl text-xs">
                Contact me
              </a>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
