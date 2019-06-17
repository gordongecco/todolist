import { sendLoginData } from "./Db";

async function validate(data) {
  const token = await sendLoginData(data);
  if (token) return token;
  else return null;
}

export { validate };
