export const SET_TOKEN = "token/setToken";

export function setToken(tokenItem) {
  return {
    type: SET_TOKEN,
    token: tokenItem
  };
}
