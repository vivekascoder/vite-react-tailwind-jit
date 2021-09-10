import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
