import { useState, useContext } from "react";
import { Store } from "../context/Store";
import { Link } from "react-router-dom";
import { GoBackIcon } from "./icons";
import { nanoid } from "nanoid";
import { saveSession, addWorkDay } from "../context/actions";

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
  const { state, dispatch } = useContext(Store);

  const [selectedSessionTime, setSelectedSessionTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState("");

  // const currentTime = `${
  //   new Date().getHours() < 10
  //     ? "0" + new Date().getHours()
  //     : new Date().getHours()
  // }:${
  //   new Date().getMinutes() < 10
  //     ? "0" + new Date().getMinutes()
  //     : new Date().getMinutes()
  // }`;
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        <form action="" className="h-full">
          <div className="h-full mx-auto md:w-3/5 grid grid-rows-4">
            <div className="row-span-1 flex items-center justify-center">
              <select
                name="projectName"
                id="projectName"
                className="bg-gray-900 p-2 rounded-md"
                required
                onChange={(e) => {
                  setSelectedProject(e.target.value);
                }}>
                <option value="N/A">Choose project/activity</option>
                {state.projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="row-span-1 flex items-center justify-center">
              <select
                name="projectName"
                id="projectName"
                className="bg-gray-900 p-2 rounded-md"
                required
                onChange={(e) => {
                  setSelectedSessionTime(e.target.value);
                }}>
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
            {/* <div className="row-span-1 flex items-center justify-center font-normal">
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
          </div> */}
            <div className="row-span-1 flex items-center justify-center">
              {/* Make Btn disabled bg-gray-900 cursor:none */}
              <button
                type="reset"
                className="bg-green-500 text-gray-100 p-2 rounded-md"
                onClick={() => {
                  dispatch(
                    addWorkDay({
                      day: new Date(Date.now()).toDateString(),
                      workingMinutes: parseInt(selectedSessionTime),
                    })
                  );
                  dispatch(
                    saveSession({
                      id: nanoid(5),
                      sessionDay: new Date(Date.now()).toDateString(),
                      parentProject: selectedProject,
                      workingMinutes: parseInt(selectedSessionTime),
                    })
                  );
                }}>
                Add Session
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddSession;
