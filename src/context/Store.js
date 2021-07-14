import { createContext, useEffect, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  isSidebarOpen: false,
  stars: {
    one: 480,
    two: 500,
    three: 520,
  },
  workDays: [
    {
      day: "Wed Jul 07 2021",
      workingMinutes: 65,
    },
  ],
  sessions: [
    {
      id: "session1",
      sessionDay: "Wed Jul 07 2021",
      parentProject: "111",
      workingMinutes: 20,
    },
    {
      id: "session2",
      sessionDay: "Wed Jul 07 2021",
      parentProject: "222",
      workingMinutes: 30,
    },
  ],
  projects: [
    {
      id: "111",
      title: "Project 111",
      workingMinutes: 90,
    },
    {
      id: "222",
      title: "Project 222",
      workingMinutes: 60,
    },
  ],
};

const isDataSaved = localStorage.getItem("pomodoroState")
  ? JSON.parse(localStorage.getItem("pomodoroState"))
  : initialState;

export const Store = createContext(isDataSaved);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, isDataSaved);

  useEffect(() => {
    localStorage.setItem("pomodoroState", JSON.stringify(state));
  }, [state]);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
