function validate(data) {
  if (data.username === "username" && data.password === "password") return true;
  else return false;
}

function valami() {}

export { validate, valami };
