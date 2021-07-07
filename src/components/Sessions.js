import { Link } from "react-router-dom";
import { GoBackIcon, TrashcanIcon } from "./icons";

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
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        <div className="py-1 flex items-center justify-center font-normal">
          {/* Stars */}
          <div className="bg-black p-1 rounded-md flex items-center justify-center ">
            30
          </div>

          {/* Sessions Day */}
          <div className="mx-5 bg-gray-900 p-1 rounded-md">Project One</div>

          {/* Total minutes cound */}
          <div>
            <TrashcanIcon />
          </div>
        </div>
        <div className="py-1 flex items-center justify-center font-normal">
          {/* Stars */}
          <div className="bg-black p-1 rounded-md flex items-center justify-center ">
            30
          </div>

          {/* Sessions Day */}
          <div className="mx-5 bg-gray-900 p-1 rounded-md">Project One</div>

          {/* Total minutes cound */}
          <div>
            <TrashcanIcon />
          </div>
        </div>
        <div className="py-1 flex items-center justify-center font-normal">
          {/* Stars */}
          <div className="bg-black p-1 rounded-md flex items-center justify-center ">
            30
          </div>

          {/* Sessions Day */}
          <div className="mx-5 bg-gray-900 p-1 rounded-md">Project One</div>

          {/* Total minutes cound */}
          <div>
            <TrashcanIcon />
          </div>
        </div>
      </main>
    </>
  );
};

export default Sessions;
