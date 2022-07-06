import './exercise-walkie-talkie.component.scss';
import { letters, colors } from '../../data/walkie-talkie-data';
import { useState } from 'react';
import shuffleArray from '../../utils/shuffleArray';

let shuffledColors = shuffleArray(colors);
let shuffledLetters = shuffleArray(letters);

const WalkieTalkie = () => {
    const [color, setColor] = useState(shuffleArray(colors)[0]);
    const [letter, setLetter] = useState(shuffleArray(letters)[0]);
    const handleClickColor = (e) => {
        setColor(e.target.getAttribute('value'));
    };
    const handleClickLetter = (e) => {
        setLetter(e.target.getAttribute('value'));
    };

    return (
        <div className="walkieTalkie">
            <div className="wrapper">
                <h1 className="heading">Click on either a color or a letter</h1>
                <div className="avatars">
                    <div
                        className="colorBox"
                        style={{
                            backgroundColor: color,
                            width: 120,
                            height: 120,
                            pointerEvents: 'none',
                            fontSize: '36px',
                            color:
                                color === 'white' || color === 'yellow'
                                    ? 'black'
                                    : 'white',
                            '@media (max-width: 600px)': {
                                width: 64,
                                height: 64,
                                fontSize: '32px',
                            },
                        }}
                    >
                        {color}
                    </div>
                    +
                    <div
                        className="colorBox"
                        style={{
                            backgroundColor: letter,
                            pointerEvents: 'none',
                            width: 120,
                            height: 120,
                            fontSize: '64px',
                            '@media (max-width: 600px)': {
                                width: 64,
                                height: 64,
                                fontSize: '32px',
                            },
                        }}
                    >
                        {letter}
                    </div>
                </div>

                <div className="colorsLetters">
                    {shuffledColors.slice(1, 6).map((element, idx) => (
                        <div key={idx + 1}>
                            {' '}
                            <div
                                className="colorBox"
                                value={element}
                                aria-label="add"
                                style={{
                                    backgroundColor: element,

                                    width: 96,
                                    height: 96,
                                    fontSize: '16px',
                                    color:
                                        element === 'white' ||
                                        element === 'yellow'
                                            ? 'black'
                                            : 'white',
                                    '&:hover': {
                                        color: 'black',
                                    },
                                    '@media (max-width: 600px)': {
                                        width: 64,
                                        height: 64,
                                        fontSize: '10px',
                                    },
                                }}
                                onClick={handleClickColor}
                            >
                                {element}
                            </div>
                        </div>
                    ))}

                    {shuffledLetters.slice(1, 6).map((element, idx) => (
                        <div key={idx + 1}>
                            {' '}
                            <div
                                className="colorBox"
                                value={element}
                                aria-label="add"
                                style={{
                                    backgroundColor: element,
                                    width: 96,
                                    height: 96,
                                    fontSize: '24px',
                                    '@media (max-width: 600px)': {
                                        width: 64,
                                        height: 64,
                                        fontSize: '10px',
                                    },
                                }}
                                onClick={handleClickLetter}
                            >
                                {element}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WalkieTalkie;
