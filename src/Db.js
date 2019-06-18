async function fetchData(token) {
  try {
    let response = await fetch("http://localhost:8080/", {
      headers: {
        Authorization: token
      }
    });

    if (response.status == 200) {
      let data = response.json();
      return data;
    } else {
      return response.status;
    }
  } catch (err) {
    return null;
  }
}

// async function sendData(arrayList, token) {
//   let data = { array: arrayList };

//   fetch("http://localhost:8080/", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     }
//   });
// }

async function sendLoginData(data) {
  let response;
  try {
    response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.status == 200) {
      let t = await response.json();

      return t.token;
    } else return response.status;
  } catch (err) {
    return null;
  }
}

export { sendLoginData, fetchData };
