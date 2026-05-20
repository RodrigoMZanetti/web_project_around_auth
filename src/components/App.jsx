import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer.jsx";
import Card from "./Main/Card.jsx";

import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Popup from "./Popup/Popup.jsx";
import NewCard from "./Popup/NewCard.jsx";
import EditProfile from "./Popup/EditProfile.jsx";
import EditAvatar from "./Popup/EditAvatar.jsx";

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { getUserToken, signinUser, signupUser } from "../auth/auth.js";

import "../../blocks/cards.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  ("popup state:", popup);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    try {
      const newCard = isLiked
        ? await api.deleteLike(card._id)
        : await api.addLike(card._id);

      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);

      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  function handleClosePopup() {
    setPopup(null);
  }
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleUpdateUser(data) {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  }
  async function handleUpdateAvatar(data) {
    try {
      const newData = await api.setUserAvatar(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit(data) {
    try {
      const newCard = await api.addCard(data);

      setCards((prevCards) => [newCard, ...prevCards]);

      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }
  //////////////////////////////////////////////////////////////
  function handleRegister({ email, password }) {
    signupUser({ email, password })
      .then((result) => {
        console.log(result);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogIn({ email, password }) {
    signinUser({ email, password })
      .then((result) => {
        if (result?.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", result.token);
          localStorage.setItem("email", email);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/singin");
  }

  ///////////////////////////////////////////////////////////////////////
  const newCardPopup = {
    title: "New Card",
    children: <NewCard handleAddPlaceSubmit={handleAddPlaceSubmit} />,
  };

  const newProfilePopup = { title: "New Profile", children: <EditProfile /> };

  const newAvatarPopup = {
    title: "New Avatar",
    children: <EditAvatar onUpdateAvatar={handleUpdateAvatar} />,
  };
  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token encontrado:", token);

    if (token) {
      getUserToken({ token })
        .then((result) => {
          if (result) {
            setLoggedIn(true);
            setIsCheckingToken(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsCheckingToken(false);
        });
    }
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    async function fetchData() {
      const cards = await api.getInitialCards();

      setCards(cards);
    }
    fetchData();
  }, [loggedIn]);

  useEffect(() => {
    if (!loggedIn) return;
    async function fetchData() {
      const currentUser = await api.getUserInfo();
      setCurrentUser(currentUser);
    }
    fetchData();
  }, [loggedIn]);

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        {isCheckingToken ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route
              path="/signin"
              element={<Login handleLogIn={handleLogIn} />}
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  handleLogout={handleLogout}
                />
              }
            >
              <Route
                index
                element={
                  <Main
                    onOpenPopup={handleOpenPopup}
                    onClosePopup={handleClosePopup}
                    popup={popup}
                    newProfilePopup={newProfilePopup}
                    newCardPopup={newCardPopup}
                    newAvatarPopup={newAvatarPopup}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                  />
                }
              />
            </Route>
          </Routes>
        )}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
