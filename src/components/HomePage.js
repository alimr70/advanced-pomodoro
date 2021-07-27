import { useContext } from "react";
import { Store } from "../context/Store";
import { toggleSidbar } from "../context/actions";
import { Link } from "react-router-dom";
import {
  HamburgerMenuIcon,
  RoundedPlusIcon,
  StarIcon,
  CloseMenuIcon,
  SessionsIcon,
  SettingsIcon,
} from "./icons";

const HomePage = () => {
  return (
    <>
      <Nav />

      <Sidebar />

      <Main />

      <Footer />
    </>
  );
};

const Nav = () => {
  const { state, dispatch } = useContext(Store);
  const { isSidebarOpen } = state;
  return (
    <>
      {/* Navbar */}
      <header className="flex items-center justify-center">
        <div className="w-full mx-auto py-2 px-3 sm:w-9/12 md:w-7/12 lg:w-1/2">
          <nav className="flex items-center justify-between">
            <div
              className="cursor-pointer"
              onClick={() => {
                dispatch(toggleSidbar(!isSidebarOpen));
              }}>
              <HamburgerMenuIcon />
            </div>
            <div>{new Date(Date.now()).toDateString()}</div>
            <Link to="/addSession">
              <div>
                <RoundedPlusIcon />
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

const Sidebar = () => {
  const { state, dispatch } = useContext(Store);
  const isSidebarOpen = state.isSidebarOpen;
  return (
    <>
      {/* Sidebar - additional app option links */}
      <aside
        className={`bg-gray-700 h-screen absolute flex flex-col items-start transform -translate-x-${
          isSidebarOpen ? "0" : "full"
        } transition ease-in duration-400 z-10`}>
        <div
          className="p-2 mt-4 cursor-pointer"
          onClick={() => {
            dispatch(toggleSidbar(!isSidebarOpen));
          }}>
          <CloseMenuIcon />
        </div>
        <div className="mt-5 mr-5">
          <ul className="pl-3">
            <Link
              to="/workingDays"
              onClick={() => {
                dispatch(toggleSidbar(!isSidebarOpen));
              }}>
              <li className="pt-5 font-light flex items-center">
                <SessionsIcon />
                Sessions
              </li>
            </Link>
            <Link
              to="/projects"
              onClick={() => {
                dispatch(toggleSidbar(!isSidebarOpen));
              }}>
              <li className="pt-5 font-light flex items-center">
                <StarIcon color="text-green-400" />
                Projects &amp; activities
              </li>
            </Link>
            <Link
              to="/settings"
              onClick={() => {
                dispatch(toggleSidbar(!isSidebarOpen));
              }}>
              <li className="pt-5 font-light flex items-center">
                <SettingsIcon />
                Settings
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

const Main = () => {
  return (
    <>
      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1">
        <div className="h-full mx-auto md:w-3/5 grid grid-cols-1 gap-5 xs:grid-rows-3 xs:grid-cols-3 xs:gap-10">
          <TimeBtn minsCount="5" />
          <TimeBtn minsCount="10" />
          <TimeBtn minsCount="15" />
          <TimeBtn minsCount="20" />
          <TimeBtn minsCount="25" />
          <TimeBtn minsCount="30" />
          <TimeBtn minsCount="40" />
          <TimeBtn minsCount="50" />
          <TimeBtn minsCount="60" />
        </div>
      </main>
    </>
  );
};

const Footer = () => {
  const { state } = useContext(Store);
  const { sessions } = state;
  const { one, two, three } = state.stars;

  const todaysWorkDay = new Date(Date.now()).toDateString();

  let workingMinutes = 0;

  sessions.map((session) => {
    return todaysWorkDay
      ? session.sessionDay === todaysWorkDay
        ? (workingMinutes += session.workingMinutes)
        : ""
      : "";
  });

  const isStar = (starNum, todaysWorkDay) => {
    return todaysWorkDay
      ? workingMinutes >= starNum
        ? "text-yellow-300"
        : "text-gray-400"
      : "text-gray-400";
  };

  const progressbarWidth = `${
    (workingMinutes / three) * 100 >= 100 ? 100 : (workingMinutes / three) * 100
  }%`;
  const progressbarOneStarWidth = `${(one / three) * 100}%`;
  const progressbarTwoStarWidth = `${(two / three) * 100}%`;

  return (
    <>
      {/* Footer - Wrok sessions achievment */}
      <footer className="w-full row-span-3 grid py-3">
        {/* Make a progress bar */}
        <div
          id="footer-container"
          className="w-5/6 sm:w-4/5 md:w-4/6 lg:w-7/12 xl:w-1/2 h-full mx-auto justify-self-center self-center grid">
          <div className="grid xs:grid-flow-col items-center justify-items-center">
            <span>Your achievment today: {workingMinutes} min</span>
            <div className="flex">
              <span>
                <StarIcon color={isStar(one, todaysWorkDay)} />
              </span>
              <span>
                <StarIcon color={isStar(two, todaysWorkDay)} />
              </span>
              <span>
                <StarIcon color={isStar(three, todaysWorkDay)} />
              </span>
            </div>
          </div>

          <div className="relative h-10 w-full border-2 border-green-500 rounded-md justify-self-center self-center">
            <div
              className="h-full bg-green-500 justify-self-start self-center"
              style={{ width: progressbarWidth }}></div>
            <div
              className="absolute top-0 left-0 h-full border-gray-500 border-r-2"
              style={{ width: progressbarOneStarWidth }}></div>
            <div
              className="absolute top-0 left-0 h-full border-gray-500 border-r-2"
              style={{ width: progressbarTwoStarWidth }}></div>
          </div>
        </div>
      </footer>
    </>
  );
};

const TimeBtn = ({ minsCount }) => {
  return (
    <Link to={`/time/${minsCount}`} className="m-auto">
      <button className="time-btn">{minsCount}</button>
    </Link>
  );
};

export default HomePage;
