import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RoundedPauseIcon, RoundedStartIcon } from "./icons";

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
            <div className="mx-auto">Session Timer</div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Main = () => {
  let { mins } = useParams();

  const [isCounting, setIsCounting] = useState(false);
  const [minutes, setMenutes] = useState(mins);
  const [seconds, setSeconds] = useState(0);

  const minutesCount = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsCount = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const pauseOrPlay = isCounting ? <RoundedPauseIcon /> : <RoundedStartIcon />;

  useEffect(() => {
    if (isCounting) {
      const timerCountdown = setTimeout(() => {
        if (seconds === 0 && minutes === 0) {
          setIsCounting(false);
        } else if (seconds === 0 && minutes > 0) {
          setMenutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
      return () => clearTimeout(timerCountdown);
    }
  }, [isCounting, minutes, seconds]);

  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1 row-span-6">
        <div className="h-full mx-auto md:w-3/5 grid grid-rows-4">
          <div className=" row-span-1 flex items-center justify-center">
            <div className="bg-gray-900 text-5xl p-5 rounded-md">
              {`${minutesCount} : ${secondsCount}`}
            </div>
          </div>
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
            <button
              className="p-5 self-center mt-auto bg-yellow-500 rounded-full"
              onClick={() => {
                setIsCounting(!isCounting);
              }}>
              {pauseOrPlay}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddSession;
