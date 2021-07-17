export const showMsg = (msg) => {
  return {
    type: "SHOW_MSG",
    payload: { msg },
  };
};

export const toggleSidbar = (isSidebarOpen) => {
  return {
    type: "TOGGLE_SIDEBAR",
    payload: { isSidebarOpen },
  };
};

export const toggleAddProject = (show, id) => {
  return {
    type: "TOGGLE_ADD_PROJECT",
    payload: { showAddProject: { show, id } },
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

export const deleteSession = (sessionId) => {
  return {
    type: "DELETE_SESSION",
    payload: {
      sessionId,
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

export const addProjcet = (project) => {
  return {
    type: "ADD_PROJECT",
    payload: {
      project,
    },
  };
};

export const deleteProject = (projectId) => {
  return {
    type: "DELETE_PROJECT",
    payload: {
      projectId,
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
