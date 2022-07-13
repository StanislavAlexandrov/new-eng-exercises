import { useEffect, useState } from 'react';
import './exercise-letter-by-letter.component.scss';
//TODO switch outside variable for useRef
let myInterval;
const DATA = ['apple', 'pear', 'grapefruit', 'kiwi', 'banana'];
export default function ExerciseLetterByLetter() {
    const [step, setStep] = useState(0); //steps of the whole task
    const [word, setWord] = useState(DATA[step]); //set word from DATA according to step
    const [myState, setMyState] = useState(1); // variable for SLICING on screen

    useEffect(() => {
        if (step >= DATA.length) {
            //if current step reaches length of DATA (words) go back
            console.log('reached');
            setStep(0);
        }
        if (myState === word.length) {
            //if the SLICING variable gets to the end of the word
            clearInterval(myInterval);
            setTimeout(() => {
                setMyState(1);
                setStep((n) => ++n);
                step < DATA.length - 1
                    ? setWord(DATA[step + 1])
                    : setWord(DATA[0]);
            }, 1000);
        }
    }, [myState, step, word.length]);

    const isIntervalDone = () => {
        myState > 0 ? setMyState((n) => ++n) : clearInterval(myInterval);
    };

    const manualInterruption = () => {
        //if the guess is ready, the process needs to be interrupted
        clearInterval(myInterval);
        setMyState(1);
        setStep((n) => ++n);
    };

    function handleStartInterval() {
        myInterval = setInterval(isIntervalDone, 200); //how FAST the letters appear
    }

    return (
        <div className="App">
            <h4>
                Step {step + 1} of {DATA.length}
            </h4>

            <h2 className="word">{word.slice(0, myState)}</h2>
            <button onClick={handleStartInterval}>click</button>
            <div></div>
            <button onClick={manualInterruption}>interrupt</button>
        </div>
    );
}
