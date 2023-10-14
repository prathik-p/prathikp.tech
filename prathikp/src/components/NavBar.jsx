function Navbar() {
  return (
    <>
      <div class="navbar bg-inherit py-5 px-4 border-4 border-white">
        <div class="navbar-start">
          <div class="dropdown px-2">
            <label tabindex="0" class="btn bg-inherit btn-ghost no-animation">
              Contact me
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
        <div class="navbar-center">
          <a class="normal-case text-4xl font-bold">Welcome!</a>
        </div>
        <div class="navbar-end ">
          <ul class="menu menu-dropdown-toggle lg:menu-horizontal space-x-6 no-animation px-2">
            <button className="btn bg-inherit btn-ghost">projects</button>
            <button className="btn bg-inherit btn-ghost">default</button>
            <button className="btn bg-inherit btn-ghost">default</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
