export const ADD_LOGIN_DATA = "LginFormState/addLoginData";

export function addData(login) {
  return {
    type: ADD_LOGIN_DATA,
    username: login.username,
    password: login.password
  };
}
