import React from 'react';
import './exercise-disappearing.component.scss';
import disappearingSentences from '../../data/disappearing-sentences-data.js';
import { v4 as uuidv4 } from 'uuid';

function ExerciseDisappearing() {
    return (
        <>
            <h2> Hover over the phrases.</h2>
            <ul className="exercise-disappearing__list">
                {disappearingSentences.map((item) => (
                    <li
                        className="exercise-disappearing__list__item  "
                        key={uuidv4()}
                    >
                        {' '}
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ExerciseDisappearing;
