export const toggleSidbar = (isSidebarOpen) => {
  return {
    type: "TOGGLE_SIDEBAR",
    payload: { isSidebarOpen },
  };
};
