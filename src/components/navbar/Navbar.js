import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.scss';

import Logo from '../../assets/img/logo.png';

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
                            <Link to="/about">About 🍷</Link>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
