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
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(destinationAPI)
      .then((resp) => resp.json())
      .then((destinationsArray) => {
        setDestinations(destinationsArray);
        if (!isLoggedIn) {
          navigate('/login')
        }

        let destinationsDisplayed = [];
        for (const destination of destinations) {
          for (const favorite of userInfo.favorites) {
            if (destination.name === favorite) {
              destinationsDisplayed.push(destination);
            }


          }
        }

        if (favoritesOnly) {
          console.log('destinationsDisplayed', destinationsDisplayed)
          setDestinations([...destinationsDisplayed]);
        }

        console.log('destinations', destinations)


      })
  }, [favoritesOnly])


  function toggleFavorites() {
    setFavoritesOnly(!favoritesOnly);

  }

  function handleSignUpClick() {
    setSignUpClicked(true);
    navigate('/signup');
  }



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

    if (isFavorited) {
      newFavorites = [...userInfo.favorites, locationName]
      setUserInfo({ ...userInfo, favorites: newFavorites })

    } else {
      setUserInfo({ ...userInfo, favorites: newFavorites })
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
          <Route path="/login" element={<LoginForm logIn={logIn} handleSignUpClick={handleSignUpClick} />} />
          {isLoggedIn && <Route path="/" element={<CardContainer destinations={destinations} username={userInfo.username} favorites={userInfo.favorites} handleFavoriteClick={handleFavoriteClick} toggleFavorites={toggleFavorites} />} />}
          <Route path="/signup" element={<SignUp handleNewAccount={handleNewAccount} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
