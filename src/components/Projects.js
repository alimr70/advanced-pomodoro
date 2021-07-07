import { Link } from "react-router-dom";
import { GoBackIcon, TrashcanIcon, RoundedPlusIcon, EditIcon } from "./icons";

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
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6 relative flex flex-col">
        <div className="bg-gray-900 my-px flex items-center justify-center font-normal">
          {/* Stars */}
          <div className="p-3">
            <EditIcon />
          </div>

          {/* Sessions Day */}
          <div className="mr-auto xs:mr-10">Project One</div>

          {/* Total minutes cound */}
          <div className="mr-10">1h, 5m</div>

          <div>
            <TrashcanIcon />
          </div>
        </div>
        <div className="p-5 self-center mt-auto bg-green-500 rounded-full">
          <RoundedPlusIcon color="text-gray-100" />
        </div>
      </main>
    </>
  );
};

export default Projects;
