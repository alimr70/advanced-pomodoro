const openSidebar = (state, isSidebarOpen) => {
  return {
    ...state,
    isSidebarOpen,
  };
};

const saveSession = (state, session) => {
  return {
    ...state,
    sessions: [session, ...state.sessions],
  };
};

const addWorkDay = (state, newWorkDay) => {
  let foundWorkDay = state.workDays.find(
    (workDay) => workDay.day === newWorkDay.day
  );
  if (foundWorkDay) {
    state.workDays.filter((workDay) => workDay !== foundWorkDay);
    foundWorkDay.workingMinutes += newWorkDay.workingMinutes;
    return {
      ...state,
      workDays: [foundWorkDay, ...state.workDays],
    };
  }
  return {
    ...state,
    workDays: [newWorkDay, ...state.workDays],
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return openSidebar(state, action.payload.isSidebarOpen);

    case "SAVE_SESSION":
      return saveSession(state, action.payload.session);

    case "ADD_WORKDAY":
      return addWorkDay(state, action.payload.workDay);

    default:
      return state;
  }
};

export default reducer;
