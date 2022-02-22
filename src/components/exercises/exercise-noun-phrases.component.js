import React from 'react';
import './exercise-disappearing.component.scss';
import '../../assets/img/logo.svg';

const myLinks = ['../../assets/img/logo.svg'];

const pictureShown = document.querySelector('.pictureShown');
let counter = 0;

function nextPicClick() {
    console.log(counter);
    if (counter < myLinks.length) {
        let pictureLink = myLinks[counter];
        pictureShown.src = pictureLink;

        counter++;
    } else {
        counter = 0;
    }
}

function ExerciseNounPhrases() {
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
                <img className="pictureShown img-fluid mx-auto d-block rounded"></img>
            </div>
        </>
    );
}

export default ExerciseNounPhrases;
