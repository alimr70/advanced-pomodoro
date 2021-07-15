import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GoBackIcon, TrashcanIcon } from "./icons";
import { Store } from "../context/Store";

const Sessions = () => {
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
            <div className="mx-auto">{new Date(Date.now()).toDateString()}</div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Main = () => {
  const { state } = useContext(Store);
  const { sessions, projects } = state;
  let { day } = useParams();
  const targetSessions = sessions.filter(
    (session) => session.sessionDay === day
  );
  const getProjectTitle = (projectId) => {
    const targetProject = projects.find((project) => project.id === projectId);
    return targetProject.title;
  };
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        {targetSessions.map((session) => (
          <Session
            key={session.id}
            workingMinutes={session.workingMinutes}
            projectTitle={getProjectTitle(session.parentProject)}
          />
        ))}
      </main>
    </>
  );
};

const Session = ({ workingMinutes, projectTitle }) => {
  return (
    <div className="py-1 flex items-center justify-center font-normal">
      {/* Stars */}
      <div className="bg-black w-9 p-1 rounded-md flex items-center justify-center ">
        {workingMinutes}
      </div>

      {/* Sessions Day */}
      <div className="mx-5 w-72 bg-gray-900 p-1 rounded-md flex items-center justify-center">
        {projectTitle}
      </div>

      {/* Total minutes cound */}
      <div>
        <TrashcanIcon />
      </div>
    </div>
  );
};

export default Sessions;
