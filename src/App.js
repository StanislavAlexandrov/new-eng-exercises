import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import ExerciseToBe from './components/exercises/exercise-tobe.component';
import ExerciseToBeNew from './components/exercises/exercise-tobe-new.component';
import Navbar from './components/navbar/Navbar';
import ExerciseDisappearing from './components/exercises/exercise-disappearing.component';
import ExerciseNounPhrases from './components/exercises/exercise-noun-phrases.component';

function App() {
    return (
        <Router>
            <Navbar></Navbar>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/speed">
                    <ExerciseToBeNew></ExerciseToBeNew>
                </Route>
                <Route path="/disappearing">
                    <ExerciseDisappearing></ExerciseDisappearing>
                </Route>
                <Route path="/nounPhrases">
                    <ExerciseNounPhrases></ExerciseNounPhrases>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </>
    );
}

function About() {
    return <ExerciseToBe></ExerciseToBe>;
}

export default App;
