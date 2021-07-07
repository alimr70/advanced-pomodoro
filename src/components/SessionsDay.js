import { Link } from "react-router-dom";
import { StarIcon, GoBackIcon } from "./icons";

const SessionsDay = () => {
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
            <div className="mx-auto">Sessions</div>
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
        <div className="bg-gray-900 my-px py-3 flex items-center justify-center font-normal">
          {/* Stars */}
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
          <div className="mx-5">{new Date(Date.now()).toDateString()}</div>

          {/* Total minutes cound */}
          <div>140 Min</div>
        </div>
      </main>
    </>
  );
};

export default SessionsDay;
