function changeUser(state, { payload }) {
  return { ...state, username: payload };
}

function logout(state) {
  return { ...state, username: "" };
}

const userActions = {
  changeUser,
  logout,
};

export default userActions;
