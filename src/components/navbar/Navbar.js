import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Nav__container">
                {/* <Link to="/" className="Nav__brand">
                    <img src={Logo} alt="logo" className="Nav__logo" />
                </Link> */}

                <div className="Nav__right">
                    <ul className="Nav__item-wrapper">
                        <li className="Nav__item">
                            <Link to="/">Home 🏡</Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/Questions400">400 Questions 🍷</Link>
                        </li>

                        <li className="Nav__item">
                            <Link to="/speed">Speed ⏩</Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/disappearing">Disappear 🛸</Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/nounPhrases">Noun Phrases 💬 </Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/walkieTalkie">Walkie Talkie 💬 </Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/exerciseArticles">Articles 💬 </Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/exerciseJumbleSentences">
                                Jumble Sentences 💬{' '}
                            </Link>
                        </li>
                        <li className="Nav__item">
                            <Link to="/exerciseLetterByLetter">
                                Letter By Letter 💬{' '}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
