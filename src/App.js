import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    HashRouter,
} from 'react-router-dom';
import Exercise400Questions from './components/exercises/exercise-400-questions.component';
import ExerciseToBeNew from './components/exercises/exercise-tobe-new.component';
import Navbar from './components/navbar/Navbar';
import ExerciseDisappearing from './components/exercises/exercise-disappearing.component';
import ExerciseNounPhrases from './components/exercises/exercise-noun-phrases.component';
import ExerciseArticles from './components/exercises/exercise-articles';
import ExerciseJumbleSentences from './components/exercises/exercise-jumble-sentences';

function App() {
    return (
        <HashRouter>
            <Navbar></Navbar>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/Questions400">
                    <Exercise400Questions />
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
                <Route path="/exerciseArticles">
                    <ExerciseArticles></ExerciseArticles>
                </Route>
                <Route path="/exerciseJumbleSentences">
                    <ExerciseJumbleSentences></ExerciseJumbleSentences>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
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

function Questions400() {
    return <Exercise400Questions></Exercise400Questions>;
}

export default App;
