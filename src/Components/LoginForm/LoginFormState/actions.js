export function addData(login) {
  return {
    type: "ADD",
    username: login.username,
    password: login.password
  };
}
