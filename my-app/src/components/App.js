import { Routes } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import './App.css';
import CardContainer from './CardContainer';
import LoginForm from './LoginForm';
import { Route, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUp from './SignUp';



function App() {
  const destinationAPI = "http://localhost:4001/destinations"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  function logIn(enteredUser) {
    fetch(destinationAPI)
      .then((resp) => resp.json())
      .then((destinations) => {

        let found;

        for (let i = 0; i < destinations.length; i++) {
          const users = destinations[i].users;
          found = users.find((user) => (user.username === enteredUser.username && user.password === enteredUser.password));

          if (found !== undefined) break;
        }

        if (found !== undefined) {
          setIsLoggedIn(true);
          setUserInfo(enteredUser);
          navigate('/');
        }

      })
  }


  function handleNewAccount(newUser) {
    setUserInfo(newUser);
    setIsLoggedIn(true);
   // navigate('/');
    console.log('we are working!')
    console.log(newUser);
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
