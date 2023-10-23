function Navbar() {
  return (
    <>
      <div>
        <div className="md:navbar bg-inherit  ">
          <div className="navbar-start"></div>
          <div className="navbar-center  ">
            <ul className="md:space-x-14">
              <a className="btn btn-ghost no-animation text-xs md:text-xl text-primary-focus">
                Projects
              </a>
              <a
                className="btn btn-ghost no-animation md:text-xl text-xs text-primary-focus"
                href="#aboutme"
              >
                About
              </a>
              <a className="btn btn-ghost no-animation md:text-xl text-xs text-primary-focus">
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
