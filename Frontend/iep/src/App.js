import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navigation'
import NewTraining from './components/NewTraining'
import Question1 from './components/Question1'
import Instructions from './components/Instructions'
function App() {
  return (
    <Router>
      <Navigation/>
      <Route exact path="/" component={NewTraining}/>
      <Route path="/q1" component={Question1}/>
      <Route path="/instructions" component={Instructions}/>
    </Router>
  );
}

export default App;
