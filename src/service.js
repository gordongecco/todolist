import { sendLoginData, fetchData } from "./Db";

async function validate(data) {
  const token = await sendLoginData(data);
  return token;
}

async function fillTodos(props) {
  // props.set();
  const arary = await fetchData("token");
  console.log(arary);
}
export { validate, fillTodos };
