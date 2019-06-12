import { sendLoginData } from "./Db";

function validate(data) {
  sendLoginData(data).then(response => console.log(response));
  if (data.username === "username" && data.password === "password") return true;
  else return false;
}

export { validate };
