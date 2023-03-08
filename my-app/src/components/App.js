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
    fetch(destinationAPI)
      .then((resp) => resp.json())
      .then((destinationsArray) => {

        let found;

        for (let i = 0; i < destinationsArray.length; i++) {
          const users = destinationsArray[i].users;
          found = users.find((user) => (user.username === enteredUser.username && user.password === enteredUser.password));

          if (found !== undefined) {
            setIsLoggedIn(true);
            setUserInfo(enteredUser);
            navigate('/');
            break;
          }
        }

      })
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
          {isLoggedIn && <Route path="/" element={<CardContainer />} />}
          <Route path="/signup" element={<SignUp handleNewAccount={handleNewAccount} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
