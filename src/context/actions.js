export const toggleSidbar = (isSidebarOpen) => {
  return {
    type: "TOGGLE_SIDEBAR",
    payload: { isSidebarOpen },
  };
};

export const saveSession = (session) => {
  return {
    type: "SAVE_SESSION",
    payload: {
      session,
    },
  };
};

export const addWorkDay = (workDay) => {
  return {
    type: "ADD_WORKDAY",
    payload: {
      workDay,
    },
  };
};
