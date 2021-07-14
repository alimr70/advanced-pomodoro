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

export const changeOneStarVal = (oneStarVal) => {
  return {
    type: "CHANGE_ONE_STAR_VAL",
    payload: {
      oneStarVal,
    },
  };
};

export const changeTwoStarVal = (twoStarVal) => {
  return {
    type: "CHANGE_TWO_STAR_VAL",
    payload: {
      twoStarVal,
    },
  };
};

export const changeThreeStarVal = (threeStarVal) => {
  return {
    type: "CHANGE_THREE_STAR_VAL",
    payload: {
      threeStarVal,
    },
  };
};
