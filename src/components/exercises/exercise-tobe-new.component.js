import React, { useState, useEffect } from 'react';
import './exercise-tobe.component.scss';
import questionListToBe from '../../data/questionlist-data';

let intervalId;

function ExerciseToBeNew() {
    let [count, setCount] = useState(100);

    if (count === questionListToBe.length) {
        clearInterval(intervalId);
    }

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, []);

    const restartTimer = () => {
        if (count !== 0 && count < questionListToBe.length) {
            return;
        }
        setCount(0);
        intervalId = setInterval(() => {
            setCount((i) => {
                return ++i;
            });
        }, 1800);
    };

    return (
        <div className="exerciseToBe">
            <div>
                <button onClick={restartTimer}>Start</button>
            </div>

            <div className="showSentenceTimed">
                {count === 100 ? '...' : questionListToBe[count]}
            </div>
        </div>
    );
}

export default ExerciseToBeNew;
