import { Link } from "react-router-dom";
import { GoBackIcon, StarIcon } from "./icons";

const Settings = () => {
  return (
    <>
      <Nav />

      <Main />
    </>
  );
};

const Nav = () => {
  return (
    <>
      {/* Navbar */}
      <header className="row-span-1 flex items-center justify-center">
        <div className="mx-auto py-2 px-3 w-full sm:w-9/12 md:w-7/12 lg:w-1/2">
          <nav className="flex items-center">
            <Link to="/">
              <div>
                <GoBackIcon />
              </div>
            </Link>
            <div className="mx-auto">Settings</div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Main = () => {
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        <div className="my-px py-3 flex items-center justify-center font-normal">
          <div className="bg-gray-800 p-1 rounded-md flex items-center justify-center ">
            <span>
              <StarIcon color="text-yellow-300" />
            </span>
            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
          </div>

          {/* Sessions Day */}
          <div className="mx-5">
            <input
              type="range"
              name="firstStar"
              id="firstStar"
              min="20"
              max="480"
            />
          </div>

          {/* Total minutes cound */}
          <div>60</div>
        </div>

        <div className="my-px py-3 flex items-center justify-center font-normal">
          <div className="bg-gray-800 p-1 rounded-md flex items-center justify-center ">
            <span>
              <StarIcon color="text-yellow-300" />
            </span>
            <span>
              <StarIcon color="text-yellow-300" />
            </span>
            <span>
              <StarIcon />
            </span>
          </div>

          {/* Sessions Day */}
          <div className="mx-5">
            <input
              type="range"
              name="secondStar"
              id="secondStar"
              min="40"
              max="500"
            />
          </div>

          {/* Total minutes cound */}
          <div>120</div>
        </div>

        <div className="my-px py-3 flex items-center justify-center font-normal">
          <div className="bg-gray-800 p-1 rounded-md flex items-center justify-center ">
            <span>
              <StarIcon color="text-yellow-300" />
            </span>
            <span>
              <StarIcon color="text-yellow-300" />
            </span>
            <span>
              <StarIcon color="text-yellow-300" />
            </span>
          </div>

          {/* Sessions Day */}
          <div className="mx-5">
            <input
              type="range"
              name="secondStar"
              id="secondStar"
              min="60"
              max="520"
            />
          </div>

          {/* Total minutes cound */}
          <div>180</div>
        </div>
      </main>
    </>
  );
};

export default Settings;
