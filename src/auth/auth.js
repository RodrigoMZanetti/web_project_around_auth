const BASE_URL = "https://se-register-api.en.tripleten-services.com/v1";

export function signupUser({ email, password }) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((result) => {
      if (!result.ok) {
        return Promise.reject(
          `400 - Um dos campos foi preenchido incorretamente`,
        );
      }

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
      if (result.status === 400) {
        return Promise.reject(`um ou mais campos não foram fornecidos`);
      }

      if (result.status === 401) {
        return Promise.reject(
          `o usuário com o e-mail especificado não encontrado`,
        );
      }

      return result.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getUserToken({ token }) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      if (result.status === 400) {
        return Promise.reject(
          `Token não fornecido ou fornecido em formato errado`,
        );
      }

      if (result.status === 401) {
        return Promise.reject(`O token fornecido é inválido`);
      }

      return result.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
