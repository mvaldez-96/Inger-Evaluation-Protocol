import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import NewTraining from './components/NewTraining'
function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" component={NewTraining}/>
    </Router>
  );
}

export default App;
