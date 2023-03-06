import { Routes } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import './App.css';
import CardContainer from './CardContainer';
import LoginForm from './LoginForm';
import { Route, redirect} from 'react-router-dom';
import { useState } from 'react';



function App() {
  const destinationAPI = "http://localhost:4001/destinations"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logIn(enteredUser) {
    

    fetch(destinationAPI)
    .then((resp)=> resp.json())
    .then((destinations) => {

      let found = "";

      for (let i = 0; i < destinations.length; i++) {
        const users = destinations[i].users;
        found = users.find((user) => (user.username === enteredUser.username && user.password === enteredUser.password));

        if (found !== undefined) {
          console.log("found!")
          break;
        }
      }

      if (found !== undefined) {
        setIsLoggedIn(true);
      }

    } )
  }



  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        {!isLoggedIn && <Route path="/" element={<LoginForm logIn={logIn}/> } />}
          <Route path="/" element={<CardContainer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
