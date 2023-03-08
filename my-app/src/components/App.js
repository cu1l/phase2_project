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
      .then((setAccounts))

    let user;
    for(const account of accounts) {
      if(enteredUser.username == account.username) {
        user = account;
      }
    }

    if(enteredUser.username == user.username && enteredUser.password == user.password){
      setIsLoggedIn(true);
      setUserInfo(user)
      navigate('/');
    }
  }


  function handleNewAccount(newUser, firstFavoriteName) {
    setUserInfo(newUser);
    setIsLoggedIn(true);

    const location = destinations.filter((destination) => (destination.name === firstFavoriteName))

    if (location.length > 0) {
      const users = location[0].users;

      fetch(destinationAPI + '/' + location[0].id.toString(), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          users: [...users, newUser]
        })

      })
    }

    navigate('/');

  }



  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<LoginForm logIn={logIn} />} />
          {isLoggedIn && <Route path="/" element={<CardContainer username={userInfo.username}/>} />}
          <Route path="/signup" element={<SignUp handleNewAccount={handleNewAccount} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
