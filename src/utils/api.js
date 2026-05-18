class API {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _makeRequest(URL, method, body) {
    return fetch(`${this._baseUrl}/${URL}`, {
      method: method,
      headers: this._headers,
      body: body ? JSON.stringify(body) : undefined,
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  getUserInfo() {
    return this._makeRequest("users/me", "GET");
  }

  getInitialCards() {
    return this._makeRequest("cards", "GET");
  }

  addLike(cardId) {
    return this._makeRequest(`cards/${cardId}/likes`, "PUT");
  }

  deleteLike(cardId) {
    return this._makeRequest(`cards/${cardId}/likes`, "DELETE");
  }

  setUserInfo(data) {
    return this._makeRequest(`users/me`, "PATCH", {
      name: data.name,
      about: data.about,
    });
  }

  addCard({ name, link }) {
    return this._makeRequest(`cards`, "POST", { name, link });
  }

  setUserAvatar(data) {
    return this._makeRequest(`users/me/avatar`, "PATCH", {
      avatar: data.avatar,
    });
  }

  deleteCard(cardId) {
    return this._makeRequest(`cards/${cardId}`, "DELETE");
  }
}

const api = new API({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "1ea7b6ca-ac6f-43e4-9d93-04922f8ad215",
    "Content-Type": "application/json",
  },
});

export default api;
