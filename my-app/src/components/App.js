import { Routes } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import './App.css';
import CardContainer from './CardContainer';
import LoginForm from './LoginForm';
import { Route, redirect, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './SignUp';


function App() {
  const destinationAPI = "http://localhost:4001/destinations"
  const grabUsers = "http://localhost:4001/users"
  const [accounts, setAccounts] = useState([])
  const [destinations, setDestinations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    fetch(destinationAPI)
      .then((resp) => resp.json())
      .then((destinationsArray) => {
        setDestinations(destinationsArray);
      })
  }, [])




  function logIn(enteredUser) {
    fetch(grabUsers)
      .then((resp) => resp.json())
      .then((accounts) => {
        setAccounts(accounts);

        let user;
        for (const account of accounts) {
          if (enteredUser.username === account.username) {
            user = account;
          }
        }

        if (user !== undefined && enteredUser.username === user.username && enteredUser.password === user.password) {
          setIsLoggedIn(true);
          setUserInfo(user)
          navigate('/');
        }

      })


  }


  function handleNewAccount(newUser) {
    setUserInfo(newUser);
    setIsLoggedIn(true);


    fetch(grabUsers, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)

    })

    navigate('/');

  }


  function handleFavoriteClick(locationName, isFavorited) {
    let newFavorites = userInfo.favorites.filter((favorite) => (favorite !== locationName));
    console.log(newFavorites, isFavorited)
    console.log(userInfo)

    if (isFavorited) {
      newFavorites = [...userInfo.favorites, locationName]
      setUserInfo({...userInfo, favorites: newFavorites })

    } else {
      setUserInfo({...userInfo, favorites: newFavorites })
    }


    fetch(grabUsers + '/' + userInfo.id.toString(), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userInfo.name,
        password: userInfo.password,
        favorites: newFavorites
      })
    })

  }



  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<LoginForm logIn={logIn} />} />
          {isLoggedIn && <Route path="/" element={<CardContainer username={userInfo.username} favorites={userInfo.favorites} handleFavoriteClick={handleFavoriteClick}/>} />}
          <Route path="/signup" element={<SignUp handleNewAccount={handleNewAccount} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
