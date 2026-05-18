export function signupUser({ name, email, password }) {
  return fetch("/signup", {
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
  return fetch("/signin", {
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
