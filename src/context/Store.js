import { createContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  isSidebarOpen: false,
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
      workingMinutes: "20",
    },
    {
      id: "session2",
      sessionDay: "Wed Jul 07 2021",
      parentProject: "222",
      workingMinutes: "30",
    },
  ],
  projects: [
    {
      id: "111",
      title: "Project 111",
      workingMinutes: "90",
    },
    {
      id: "222",
      title: "Project 222",
      workingMinutes: "60",
    },
  ],
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
