export const toggleDarkMode = (isDark) => async (dispatch) => {
  dispatch({ type: "darkModeSuccess", payload: !isDark });
};
