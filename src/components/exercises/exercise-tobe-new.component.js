import React, { useState, useEffect } from 'react';
import './exercise-tobe.component.scss';

const questionList = [
    '1. Who ... you?',
    '2. What ... your name?',
    '3. Where ... you from?',
    '4. How old ... you?',
    '5. I ... Maria.',
    '6. I ... 20.',
    '7. I ... a consultant.',
    '8. They ... at work.',
    '9. \n I \n ... \n f \n i \n n \n e \n .',
    '10. Where ... your parents?',
];
let intervalId;

function ExerciseToBeNew() {
    let [count, setCount] = useState(100);

    if (count === questionList.length) {
        clearInterval(intervalId);
    }

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, []);

    const restartTimer = () => {
        if (count !== 0 && count < questionList.length) {
            return;
        }
        setCount(0);
        intervalId = setInterval(() => {
            setCount(i => {
                return ++i;
            });
        }, 1800);
    };

    return (
        <div className="exerciseToBe">
            <div>
                <button onClick={restartTimer}>Start</button>
            </div>

            <div class="showSentenceTimed">
                {count === 100 ? '' : questionList[count]}
            </div>
        </div>
    );
}

export default ExerciseToBeNew;
