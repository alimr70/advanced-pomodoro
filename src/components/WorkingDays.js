import { useContext } from "react";
import { Link } from "react-router-dom";
import { StarIcon, GoBackIcon } from "./icons";
import { Store } from "../context/Store";

const WorkingDays = () => {
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
  const { state } = useContext(Store);
  const { workDays } = state;
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        {workDays.map((workDay) => (
          <WorkingDay
            key={workDay.day}
            day={workDay.day}
            workingMinutes={workDay.workingMinutes}
          />
        ))}
      </main>
    </>
  );
};

const WorkingDay = ({ day, workingMinutes }) => {
  return (
    <div className="bg-gray-900 my-px py-3 font-normal">
      <Link
        to={`/sessions/${day}`}
        className="w-full flex items-center justify-center">
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

        {/* Wrok Day */}
        <div className="mx-5">{day}</div>

        {/* Total minutes cound */}
        <div>{workingMinutes} Min</div>
      </Link>
    </div>
  );
};

export default WorkingDays;
