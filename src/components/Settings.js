import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  changeOneStarVal,
  changeTwoStarVal,
  changeThreeStarVal,
} from "../context/actions";
import { Store } from "../context/Store";
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
  const { state, dispatch } = useContext(Store);
  const { one, two, three } = state.stars;
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        <div className="my-px py-3 flex items-center justify-center font-normal">
          <div className="bg-gray-800 mx-2 p-1 rounded-md flex items-center justify-center ">
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
          <input
            onChange={(e) => {
              dispatch(changeOneStarVal(e.target.value));
            }}
            className="w-3/5 max-w-xs"
            type="range"
            name="firstStar"
            id="firstStar"
            min={20}
            max={480}
            value={one}
            step={10}
          />

          {/* Total minutes cound */}
          <div className="w-12 flex items-center justify-center">{one}</div>
        </div>

        <div className="my-px py-3 flex items-center justify-center font-normal">
          <div className="bg-gray-800 mx-2 p-1 rounded-md flex items-center justify-center ">
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
          <input
            onChange={(e) => {
              dispatch(changeTwoStarVal(e.target.value));
            }}
            className="w-3/5 max-w-xs"
            type="range"
            name="secondStar"
            id="secondStar"
            min={20}
            max={500}
            value={two}
            step={10}
          />

          {/* Total minutes cound */}
          <div className="w-12 flex items-center justify-center">{two}</div>
        </div>

        <div className="my-px py-3 flex items-center justify-center font-normal">
          <div className="bg-gray-800 mx-2 p-1 rounded-md flex items-center justify-center ">
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
          <input
            onChange={(e) => {
              dispatch(changeThreeStarVal(e.target.value));
            }}
            className="w-3/5 max-w-xs"
            type="range"
            name="secondStar"
            id="secondStar"
            min={20}
            max={520}
            value={three}
            step={10}
          />

          {/* Total minutes cound */}
          <div className="w-12 flex items-center justify-center">{three}</div>
        </div>
      </main>
    </>
  );
};

export default Settings;
