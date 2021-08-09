import React from "react";
import Header from './components/header';
import Gifts from './components/gifts';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/footer';
import Home from './components/home';
import {
  library
} from '@fortawesome/fontawesome-svg-core';
import { 
  faSearch,
  faRecycle,
  faGift,
  faCoffee,
  faShoppingBasket
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch,
  faRecycle,
  faGift,
  faCoffee,
  faShoppingBasket
);

function App() {
  return (
    <Router>
        <Header />
            
        <Switch>
            <Route 
              path="/gifts" 
              component={Gifts}
            />

            <Route 
              path="/"
              component={Home}
            />
        </Switch>

        <Footer />
    </Router>
  );
}

export default App;
