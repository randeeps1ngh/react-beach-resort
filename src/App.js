import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import Navbar from './components/Navbar'


function App() {
  return (<>

  <Navbar />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/rooms' component={Rooms} />
    <Route exact path='/rooms/:id' component={SingleRoom} />
    <Route component={Error} />
  </Switch>
    </>
  );
}

export default App;
