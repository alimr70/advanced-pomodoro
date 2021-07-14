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
    let newWorkDays = state.workDays.filter(
      (workDay) => workDay.day !== foundWorkDay.day
    );
    foundWorkDay.workingMinutes += newWorkDay.workingMinutes;
    return {
      ...state,
      workDays: [foundWorkDay, ...newWorkDays],
    };
  }
  return {
    ...state,
    workDays: [newWorkDay, ...state.workDays],
  };
};

const changeOneStarVal = (state, oneStarVal) => {
  return {
    ...state,
    stars: {
      ...state.stars,
      one: oneStarVal,
    },
  };
};

const changeTwoStarVal = (state, twoStarVal) => {
  return {
    ...state,
    stars: {
      ...state.stars,
      two: twoStarVal,
    },
  };
};

const changeThreeStarVal = (state, threeStarVal) => {
  return {
    ...state,
    stars: {
      ...state.stars,
      three: threeStarVal,
    },
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

    case "CHANGE_ONE_STAR_VAL":
      return changeOneStarVal(state, action.payload.oneStarVal);

    case "CHANGE_TWO_STAR_VAL":
      return changeTwoStarVal(state, action.payload.twoStarVal);

    case "CHANGE_THREE_STAR_VAL":
      return changeThreeStarVal(state, action.payload.threeStarVal);

    default:
      return state;
  }
};

export default reducer;
