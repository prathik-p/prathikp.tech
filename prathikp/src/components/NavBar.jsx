function Navbar() {
  return (
    <>
      <div className="navbar bg-inherit py-2 px-4 border-y-4 border-white">
        <div className="navbar-start">
          <div className="dropdown px-2">
            <label
              tabIndex="0"
              className="btn bg-inherit btn-ghost no-animation"
            >
              Contact me
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="normal-case text-4xl font-bold">Welcome!</a>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-dropdown-toggle lg:menu-horizontal space-x-6 no-animation px-2">
            <button className="btn bg-inherit btn-ghost">projects</button>
            <button className="btn bg-inherit btn-ghost">about</button>
            <button className="btn bg-inherit btn-ghost">default</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
