const BASE_URL = "https://se-register-api.en.tripleten-services.com/v1";

export function signupUser({ email, password }) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function signinUser({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
