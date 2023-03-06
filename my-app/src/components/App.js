import { Routes } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import './App.css';
import CardContainer from './CardContainer';
import LoginForm from './LoginForm';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LoginForm /> } />
          <Route path="/" element={<CardContainer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
