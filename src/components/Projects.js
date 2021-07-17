import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoBackIcon, TrashcanIcon, RoundedPlusIcon, EditIcon } from "./icons";
import { addProjcet } from "../context/actions";
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
  const { state } = useContext(Store);
  const { projects } = state;
  const [showAddProject, setShowAddProject] = useState(false);
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6 relative flex flex-col">
        {projects.map((project) => (
          <Project key={project.id} id={project.id} title={project.title} />
        ))}
        <button
          className="p-5 self-center mt-auto bg-green-500 rounded-full"
          onClick={() => {
            setShowAddProject(true);
          }}>
          <RoundedPlusIcon color="text-gray-100" />
        </button>
      </main>

      <AddProject
        showAddProject={showAddProject}
        setShowAddProject={setShowAddProject}
      />
    </>
  );
};

const Project = ({ id, title }) => {
  const { state } = useContext(Store);
  const { sessions } = state;
  let workingMinutes = 0;

  sessions.map((session) => {
    return session.parentProject === id
      ? (workingMinutes += session.workingMinutes)
      : "";
  });

  return (
    <div className="bg-gray-900 my-px flex items-center justify-center font-normal">
      <div className="p-3">
        <EditIcon />
      </div>

      <div className="mr-auto xs:mr-10">{title}</div>

      <div className="mr-10">{workingMinutes}</div>

      <div>
        <TrashcanIcon />
      </div>
    </div>
  );
};

const AddProject = ({ showAddProject, setShowAddProject }) => {
  const { dispatch } = useContext(Store);
  const [projectTitle, setProjectTitle] = useState("");

  const showOrNot = showAddProject ? "" : "hidden";
  return (
    <div
      className={`${showOrNot} absolute w-full h-full bg-black bg-opacity-70 flex items-center justify-center`}
      id="bg"
      onClick={(e) => {
        if (e.target.id === "bg") {
          setShowAddProject(false);
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
                  id: nanoid(5),
                  title: projectTitle,
                  workingMinutes: 0,
                })
              );
            }
            setProjectTitle("");
            setShowAddProject(false);
          }}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Projects;
