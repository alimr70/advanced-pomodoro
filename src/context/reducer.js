const showMsg = (state, msg) => {
  return {
    ...state,
    msg,
  };
};

const openSidebar = (state, isSidebarOpen) => {
  return {
    ...state,
    isSidebarOpen,
  };
};

const toggleAddProject = (state, { show, id }) => {
  return {
    ...state,
    showAddProject: {
      show,
      id,
    },
  };
};

const saveSession = (state, session) => {
  return {
    ...state,
    sessions: [session, ...state.sessions],
  };
};

const deleteSession = (state, sessionId) => {
  let newSessionState = state.sessions.filter(
    (session) => session.id !== sessionId
  );
  return {
    ...state,
    sessions: [...newSessionState],
  };
};

const addWorkDay = (state, newWorkDay) => {
  let foundWorkDay = state.workDays.find(
    (workDay) => workDay.day === newWorkDay.day
  );
  if (foundWorkDay) {
    return state;
  }
  return {
    ...state,
    workDays: [newWorkDay, ...state.workDays],
  };
};

const addProject = (state, newProject) => {
  let foundProject = state.projects.find(
    (project) => project.id === newProject.id
  );
  if (foundProject) {
    let newProjectsState = state.projects.filter(
      (project) => project.id !== foundProject.id
    );
    return {
      ...state,
      projects: [newProject, ...newProjectsState],
    };
  }
  return {
    ...state,
    projects: [newProject, ...state.projects],
  };
};

const deleteProject = (state, projectId) => {
  let newProjectsState = state.projects.filter(
    (project) => project.id !== projectId
  );
  return {
    ...state,
    projects: [...newProjectsState],
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
    case "SHOW_MSG":
      return showMsg(state, action.payload.msg);

    case "TOGGLE_SIDEBAR":
      return openSidebar(state, action.payload.isSidebarOpen);

    case "TOGGLE_ADD_PROJECT":
      return toggleAddProject(state, action.payload.showAddProject);

    case "SAVE_SESSION":
      return saveSession(state, action.payload.session);

    case "DELETE_SESSION":
      return deleteSession(state, action.payload.sessionId);

    case "ADD_WORKDAY":
      return addWorkDay(state, action.payload.workDay);

    case "ADD_PROJECT":
      return addProject(state, action.payload.project);

    case "DELETE_PROJECT":
      return deleteProject(state, action.payload.projectId);

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
