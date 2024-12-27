const Header = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="flex gap-3">
            <li>
              <a className="font-medium">Home</a>
            </li>
            <li>
              <a className="font-medium">Recipes</a>
            </li>
            <li>
              <a className="font-medium">About</a>
            </li>
            <li>
              <a className="font-medium">Search</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <input
            className="inline"
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
          <img className="w-8 ms-3" src="./icons8-person-40.png" alt="" />
        </div>
      </div>

      <div className="bg-[url('./images/hero-bg.png')] relative flex justify-center items-center my-2 min-h-[500px] bg-center rounded-lg">
        <div className="absolute text-center flex flex-col justify-center items-center inset-0 bg-black bg-opacity-60">
          <div className="">
            <h2 className="font-bold leading-9 text-white text-4xl">
              A perfect blend of culinary artistry and <br /> warm hospitality
              awaits you.
            </h2>
            <p className="font-semibold mx-auto my-6 w-1/2 text-white text-xl">
              Whether you are here for a romantic dinner, a family gathering, or
              a casual meal with friends, our warm ambiance and exceptional
              service promise a memorable dining experience.
            </p>
          </div>
          <button className="btn btn-success text-white">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
