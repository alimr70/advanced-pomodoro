import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoBackIcon, TrashcanIcon, RoundedPlusIcon, EditIcon } from "./icons";
import {
  addProjcet,
  deleteProject,
  showMsg,
  toggleAddProject,
} from "../context/actions";
import { Store } from "../context/Store";
import { nanoid } from "nanoid";

const Projects = () => {
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
            <div className="mx-auto">Projects &amp; Activities</div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Main = () => {
  const { state, dispatch } = useContext(Store);
  const { projects } = state;
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6 relative flex flex-col">
        {projects.map((project) => (
          <Project key={project.id} id={project.id} title={project.title} />
        ))}
        <button
          className="p-2 mb-2 self-center mt-auto bg-green-500 rounded-full"
          onClick={() => {
            dispatch(toggleAddProject(true));
          }}>
          <RoundedPlusIcon color="text-gray-100" />
        </button>
      </main>

      <AddProject />
    </>
  );
};

const Project = ({ id, title }) => {
  const { state, dispatch } = useContext(Store);
  const { sessions } = state;
  let workingMinutes = 0;

  sessions.map((session) => {
    return session.parentProject === id
      ? (workingMinutes += session.workingMinutes)
      : "";
  });

  return (
    <div className="bg-gray-900 my-px flex items-center justify-center font-normal">
      <div
        className="p-3 cursor-pointer"
        onClick={() => {
          dispatch(toggleAddProject(true, id));
        }}>
        <EditIcon />
      </div>

      <div className="mr-auto xs:mr-10">{title}</div>

      <div className="mr-10">{workingMinutes}</div>

      <div
        className="cursor-pointer"
        onClick={() => {
          dispatch(deleteProject(id));
        }}>
        <TrashcanIcon />
      </div>
    </div>
  );
};

const AddProject = () => {
  const { state, dispatch } = useContext(Store);
  const { showAddProject } = state;
  const [projectTitle, setProjectTitle] = useState("");

  const showOrNot = showAddProject.show ? "" : "hidden";
  const hasId = showAddProject.id ? showAddProject.id : nanoid(5);
  return (
    <div
      className={`${showOrNot} absolute w-full h-full bg-black bg-opacity-70 flex items-center justify-center`}
      id="bg"
      onClick={(e) => {
        if (e.target.id === "bg") {
          dispatch(toggleAddProject(false));
        }
      }}>
      <div className="bg-gray-800 p-5 rounded-md flex items-center justify-center flex-col">
        <p className="my-2">Add new project/activity</p>
        <input
          className="my-1"
          type="text"
          name="addProject"
          id="addProcject"
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
          }}
        />
        <button
          className="bg-green-500 text-gray-100 my-2 px-2 rounded-md"
          onClick={() => {
            if (/\S/.test(projectTitle)) {
              dispatch(
                addProjcet({
                  id: hasId,
                  title: projectTitle,
                  workingMinutes: 0,
                })
              );
              dispatch(
                showMsg({
                  type: "success",
                  msg: "Project saved 👍",
                })
              );
            } else {
              dispatch(
                showMsg({
                  type: "error",
                  msg: "Couldn't save project: Please write a title for project",
                })
              );
            }
            setProjectTitle("");
            dispatch(toggleAddProject(false, null));
          }}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Projects;
