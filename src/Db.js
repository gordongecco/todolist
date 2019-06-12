async function fetchData(token) {
  let response = await fetch("http://localhost:8080/", {
    headers: {
      Authorization: token
    }
  });

  if (response.status == 200) {
    let data = response.json();
    return data;
  } else {
    return null;
  }
}

async function sendData(arrayList, token) {
  let data = { array: arrayList };

  fetch("http://localhost:8080/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
}

async function sendLoginData(data) {
  let response = await fetch("http://localhost:8080/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  // if (response.status == 200) {
  //   let t = await response.text();
  //   let r = JSON.parse(t);
  //   console.log(r.token);

  //   return r.token;
  // } else return null;

  if (response.status == 200) {
    response.text().then(text => {
      return JSON.parse(text).token;
    });
  } else return null;
}

export { sendData, sendLoginData, fetchData };
