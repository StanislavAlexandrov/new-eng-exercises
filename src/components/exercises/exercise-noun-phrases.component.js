import React from 'react';
import './exercise-disappearing.component.scss';
import LOGO from '../../assets/img/logo.svg';
import { useState } from 'react';
let counter = 0;
const myLinks = [LOGO];

function ExerciseNounPhrases() {
    const [picLink, setPicLink] = useState('');

    function nextPicClick() {
        if (counter < myLinks.length) {
            setPicLink(myLinks[counter]);
            counter++;
        } else {
            counter = 0;
        }
    }

    return (
        <>
            <button
                id="nextPicButton"
                onClick={nextPicClick}
                class="btn btn-success btn-lg"
            >
                next
            </button>

            <div>
                <img
                    src={picLink}
                    className="pictureShown img-fluid mx-auto d-block rounded"
                ></img>
            </div>
        </>
    );
}

export default ExerciseNounPhrases;
