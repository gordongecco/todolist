import { sendLoginData, sendData } from "./Db";

async function validate(data) {
  const token = await sendLoginData(data);
  return token;
}
async function fillDatabaseArray(array, token, user) {
  const newArray = array.map(item => {
    return { name: item, username: user };
  });
  sendData(newArray, token);
}
export { validate, fillDatabaseArray };
