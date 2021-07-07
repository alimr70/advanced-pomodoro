const openSidebar = (state, isSidebarOpen) => {
  return {
    ...state,
    isSidebarOpen,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return openSidebar(state, action.payload.isSidebarOpen);
    default:
      return state;
  }
};

export default reducer;
