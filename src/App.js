import Header from './components/header';
import Menu from './components/menu';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
        <article className="bg">
            <Router>
                <Header />

                <Switch>
                    <Route path="/menu" component={Menu}/>
                </Switch>
            </Router>
        </article>
    );
}

export default App;
