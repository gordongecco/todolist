import { sendLoginData } from "./Db";

async function validate(data) {
  const token = await sendLoginData(data);
  return token;
}

export { validate };
