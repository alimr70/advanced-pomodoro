const Main = () => {
  return (
    <>
      {/* Navbar */}
      <header className="row-span-1">
        <div className="mx-auto py-2 px-3 sm:w-9/12 md:w-7/12 lg:w-1/2">
          <nav className="text-green-400 flex items-center justify-between">
            <div>
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                // class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div>{new Date(Date.now()).toDateString()}</div>
            <div>
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                // class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>

      {/* Main section - working session time options buttons */}
      <main className="bg-gray-800 py-1">
        <div className="h-full mx-auto md:w-3/5 grid grid-cols-1 gap-5 xs:grid-rows-3 xs:grid-cols-3 xs:gap-10">
          <button className="btn">5</button>
          <button className="btn">10</button>
          <button className="btn">15</button>
          <button className="btn">20</button>
          <button className="btn">25</button>
          <button className="btn">30</button>
          <button className="btn">40</button>
          <button className="btn">50</button>
          <button className="btn">60</button>
        </div>
      </main>

      {/* Footer - Wrok sessions achievment */}
      <footer className="w-full row-span-3 grid py-3">
        {/* Make a progress bar */}
        <div
          id="footer-container"
          className="w-5/6 sm:w-4/5 md:w-4/6 lg:w-7/12 xl:w-1/2 h-full mx-auto justify-self-center self-center grid">
          <div className="h-10 w-full border-2 border-green-500 rounded-md justify-self-center self-center">
            <div className="h-full w-1/3 bg-green-500 justify-self-start self-center"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
