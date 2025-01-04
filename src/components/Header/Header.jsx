import PropTypes from "prop-types";

const Header = ({ handleSearch }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">
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
        <div className="navbar-end hidden md:flex">
          <input
            onKeyUp={(e) => handleSearch(e)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <img
            className="w-8 ms-3"
            src="./icons8-person-40.png"
            alt="User Icon"
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(./images/hero-bg.png)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
        className="flex justify-center py-4 md:py-28 items-center my-2 bg-center rounded-lg"
      >
        <div className="text-center flex flex-col justify-center items-center">
          <div>
            <h2 className="font-bold leading-9 text-white text-3xl md:text-4xl">
              A perfect blend of culinary artistry and <br /> warm hospitality
              awaits you.
            </h2>
            <p className="font-semibold mx-auto my-6 md:w-1/2 text-white text-xl">
              Whether you are here for a romantic dinner, a family gathering, or
              a casual meal with friends, our warm ambiance and exceptional
              service promise a memorable dining experience.
            </p>
          </div>
          <a href="#id" className="btn btn-success text-white">
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;
