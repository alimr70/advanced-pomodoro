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
  let twoStarVal =
    state.stars.two <= parseInt(oneStarVal)
      ? parseInt(oneStarVal) + 20
      : state.stars.two;
  let threeStarVal =
    state.stars.three <= parseInt(twoStarVal)
      ? parseInt(twoStarVal) + 20
      : state.stars.three;
  return {
    ...state,
    stars: {
      one: oneStarVal,
      two: twoStarVal,
      three: threeStarVal,
    },
  };
};

const changeTwoStarVal = (state, twoStarVal) => {
  twoStarVal = twoStarVal < 40 ? (twoStarVal = 40) : twoStarVal;
  let threeStarVal =
    state.stars.three <= parseInt(twoStarVal)
      ? parseInt(twoStarVal) + 20
      : state.stars.three;

  let oneStarVal =
    parseInt(state.stars.one) >= twoStarVal
      ? parseInt(state.stars.one) - 20
      : parseInt(state.stars.one);
  return {
    ...state,
    stars: {
      one: oneStarVal,
      two: twoStarVal,
      three: threeStarVal,
    },
  };
};

const changeThreeStarVal = (state, threeStarVal) => {
  threeStarVal = threeStarVal < 60 ? (threeStarVal = 60) : threeStarVal;
  let twoStarVal =
    parseInt(state.stars.two) >= threeStarVal
      ? parseInt(state.stars.two) - 20
      : parseInt(state.stars.two);

  let oneStarVal =
    parseInt(state.stars.one) >= twoStarVal
      ? parseInt(state.stars.one) - 20
      : parseInt(state.stars.one);
  return {
    ...state,
    stars: {
      one: oneStarVal,
      two: twoStarVal,
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
