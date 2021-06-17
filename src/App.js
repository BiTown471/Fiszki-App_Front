import './App.css';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import LogApp from './LogApp';
import HomeComponnent from './HomeComponnent';
import NavBar from './componnents/navbar/NavBarComponnent';
import CreateFlashcardComponent from './CreateFlashcardComponent';
import CreateTopicComponent from "./CreateTopicComponent";
import CreatePosComponent from "./CreatePosComponent";
import TopicComponent from "./TopicComponent";
import FreeAppComponent from "./FreeAppComponent";


const App = () => {
    return (
        <Router>
                <div className="App">
                    <NavBar />
                    <header className="App-header">
                        <Switch>
                            <Route path="/" exact component = {HomeComponnent}/>
                            <Route path="/logapp" exact component = {LogApp}/>
                            {/*<Route path="/nonlogapp" exact component = {NonLogApp}/>*/}
                            <Route path="/topicselect" exact component = {TopicComponent}/>
                            <Route path="/freeapp" exact component = {FreeAppComponent}/>
                            <Route path="/addflashcard" exact component = {CreateFlashcardComponent}/>
                            <Route path="/addtopic" exact component = {CreateTopicComponent}/>
                            <Route path="/addpos" exact component = {CreatePosComponent}/>
                        </Switch>
                    </header>
                </div>
        </Router>
    )
}

export default App;
