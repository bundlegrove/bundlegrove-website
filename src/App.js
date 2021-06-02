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

function App() {
    return (
        <article className="bg">
            <Router>
                <Header />
                    
                <Switch>
                    <Route path="/gifts" component={Gifts}/>
                </Switch>

                <Footer />
            </Router>
        </article>
    );
}

export default App;
