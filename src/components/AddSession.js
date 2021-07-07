import { Link } from "react-router-dom";
import { GoBackIcon } from "./icons";

const AddSession = () => {
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
            <div className="mx-auto">Add New Session</div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Main = () => {
  const currentTime = `${
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours()
  }:${
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes()
  }`;
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        <div className="h-full mx-auto md:w-3/5 grid grid-rows-4">
          <div className="row-span-1 flex items-center justify-center">
            <select
              name="projectName"
              id="projectName"
              className="bg-gray-900 p-2 rounded-md"
              required>
              <option value="">Choose project/activity</option>
              <option value="Project1">Project1</option>
              <option value="Project2">Project2</option>
            </select>
          </div>
          <div className="row-span-1 flex items-center justify-center">
            <select
              name="projectName"
              id="projectName"
              className="bg-gray-900 p-2 rounded-md"
              required>
              <option value="">Choose session duration</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
          </div>
          <div className="row-span-1 flex items-center justify-center font-normal">
            <div className="bg-gray-900 p-2 rounded-md">
              <label htmlFor="time">Session start time: </label>
              <input
                id="time"
                type="time"
                name="time"
                className="bg-gray-900 w-auto"
                value={currentTime}
                required
              />
            </div>
          </div>
          <div className="row-span-1 flex items-center justify-center">
            {/* Make Btn disabled bg-gray-900 cursor:none */}
            <button className="bg-green-500 text-gray-100 p-2 rounded-md">
              Add Session
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddSession;
