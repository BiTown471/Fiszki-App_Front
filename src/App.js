import './App.css';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import NonLogApp from './NonLogApp';
import LogApp from './LogApp';
import HomeComponnent from './HomeComponnent';
import NavBar from './componnents/navbar/NavBarComponnent'


const App = () => {
    return (
        <Router>
                <div className="App">
                    <NavBar />
                    <header className="App-header">

                        <Switch>
                            <Route path="/" exact component = {HomeComponnent}/>
                        </Switch>
                        <Switch>
                            <Route path="/logapp" exact component = {LogApp}/>
                        </Switch>
                        <Switch>
                            <Route path="/nonlogapp" exact component = {NonLogApp}/>
                        </Switch>
                    </header>
                </div>
        </Router>
    )
}

const RunNonLogApp = () => {
    console.log("działą");
    return (
        <div><NonLogApp /></div>

    )
}
export default App;
