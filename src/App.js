import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
<Router>
    <div>
    <Header />
       <hr />
      <Switch>
        <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
      </Switch>
      <Footer />
       </div>
  </Router>
  );
}

export default App;
