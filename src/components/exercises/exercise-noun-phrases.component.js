import React from 'react';
import './exercise-noun-phrases.scss';

import { useState } from 'react';
let counter = 1;

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(
    require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/)
);

function ExerciseNounPhrases() {
    const [picLink, setPicLink] = useState(images[Object.keys(images)[0]]);

    function nextPicClick() {
        if (counter < Object.keys(images).length) {
            setPicLink(images[Object.keys(images)[counter]]);
            counter++;
        } else {
            counter = 0;
        }
    }

    return (
        <>
            <div className="allPictures">
                <img
                    src={picLink}
                    className="pictureShown img-fluid mx-auto d-block rounded"
                    alt="noun phrase exercise"
                ></img>
                <button
                    id="nextPicButton"
                    onClick={nextPicClick}
                    className="btn btn-success btn-lg"
                >
                    next
                </button>
                <div>
                    {counter} of {Object.keys(images).length}
                </div>
            </div>
        </>
    );
}

export default ExerciseNounPhrases;
