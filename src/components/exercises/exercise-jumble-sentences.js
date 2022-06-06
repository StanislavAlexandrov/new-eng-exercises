import { useState } from 'react';
import './exercise-articles.scss';

const ExerciseJumbleSentences = () => {
    const [myInput, setMyInput] = useState('');

    const handleChange = (e) => {
        setMyInput(e.target.value);
    };

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    function sentenceToArray(sentence) {
        return sentence.split(' ');
    }

    const sentenceJumbler = (sentence) => {
        let readySentence = shuffle(sentenceToArray(sentence));

        return readySentence.map((element, i) => (
            <span key={i}>{element} </span>
        ));
    };

    return (
        <div className="exercise-articles">
            <span>{sentenceJumbler(myInput)}</span>

            <div>
                <input
                    type="text"
                    placeholder="enter sentence here"
                    onChange={handleChange}
                    value={myInput}
                    className="myInput"
                />
            </div>
        </div>
    );
};

export default ExerciseJumbleSentences;
