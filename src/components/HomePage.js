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
  return (
    <>
      {/* Navbar */}
      <header className="flex items-center justify-center">
        <div className="w-full mx-auto py-2 px-3 sm:w-9/12 md:w-7/12 lg:w-1/2">
          <nav className="flex items-center justify-between">
            <div>
              <HamburgerMenuIcon />
            </div>
            <div>{new Date(Date.now()).toDateString()}</div>
            <div>
              <RoundedPlusIcon />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      {/* Sidebar - additional app option links */}
      <aside className="bg-gray-700 h-screen absolute flex flex-col items-start transform -translate-x-0">
        <div className="p-2">
          <CloseMenuIcon />
        </div>
        <div className="mt-5 mr-5">
          <ul className="pl-3">
            <li className="pt-5 font-light flex items-center">
              <SessionsIcon />
              Sessions
            </li>
            <li className="pt-5 font-light flex items-center">
              <StarIcon color="text-green-400" />
              Projects &amp; activities
            </li>
            <li className="pt-5 font-light flex items-center">
              <SettingsIcon />
              Settings
            </li>
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
          <button className="time-btn">5</button>
          <button className="time-btn">10</button>
          <button className="time-btn">15</button>
          <button className="time-btn">20</button>
          <button className="time-btn">25</button>
          <button className="time-btn">30</button>
          <button className="time-btn">40</button>
          <button className="time-btn">50</button>
          <button className="time-btn">60</button>
        </div>
      </main>
    </>
  );
};

const Footer = () => {
  return (
    <>
      {/* Footer - Wrok sessions achievment */}
      <footer className="w-full row-span-3 grid py-3">
        {/* Make a progress bar */}
        <div
          id="footer-container"
          className="w-5/6 sm:w-4/5 md:w-4/6 lg:w-7/12 xl:w-1/2 h-full mx-auto justify-self-center self-center grid">
          <div className="grid xs:grid-flow-col items-center justify-items-center">
            <span>Your achievment today: 140 min</span>
            <div className="flex">
              <span>
                <StarIcon color="text-yellow-300" />
              </span>
              <span>
                <StarIcon color="text-yellow-300" />
              </span>
              <span>
                <StarIcon color="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="h-10 w-full border-2 border-green-500 rounded-md justify-self-center self-center">
            <div className="h-full w-3/4 bg-green-500 justify-self-start self-center"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
