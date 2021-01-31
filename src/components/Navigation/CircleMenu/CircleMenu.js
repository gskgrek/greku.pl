import React, { useState } from 'react';

import { scrollToElement } from 'utils/dom';

import css from './circle-menu.module.scss';

const circleMenu = () => {
    const [isContactActive, setContactActive] = useState(false);

    const togglerChangeHandler = (e) => {
        if (!e.target.checked) {
            setContactActive(false);
        }
    };

    const handleItemClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const href = e.target.getAttribute('href');
        const id = href.replace('#', '');
        scrollToElement(document.getElementById(id));

        window.history.pushState({}, '', href);

        return false;
    };

    return (
        <nav className={css.circleMenu}>
            <input id="circle-menu-toggler" type="checkbox" onChange={togglerChangeHandler} value="1" />
            <ul className={[css.circleMenu__list, isContactActive ? css.circleMenu__list__showContent : ''].join(' ')}>
                <li className={[css.circleMenu__item, css.circleMenu__itemGreen].join(' ')}>
                    <a className={css.circleMenu__link} title="Home" aria-label="Home" href="/">
                        Home
                    </a>
                </li>
                <li className={[css.circleMenu__item, css.circleMenu__itemBlue].join(' ')}>
                    <a className={css.circleMenu__link} title="Profile" aria-label="Profile" href="#profile" onClick={handleItemClick}>
                        Profile
                    </a>
                </li>
                <li className={[css.circleMenu__item, css.circleMenu__itemYellow].join(' ')}>
                    <a className={css.circleMenu__link} title="Projects" aria-label="Projects" href="#projects" onClick={handleItemClick}>
                        Projects
                    </a>
                </li>
                <li className={[css.circleMenu__item, css.circleMenu__itemOrange, isContactActive ? css.circleMenu__itemActive : ''].join(' ')}>
                    <div className={css.circleMenu__content}>Lorem ipsum</div>
                    <button type="button" title="Contact" aria-label="Contact" className={css.circleMenu__link} onClick={() => setContactActive(!isContactActive)} onKeyDown={() => null} />
                </li>
            </ul>

            <label htmlFor="circle-menu-toggler" className={css.circleMenu__toggle}>
                <span />
            </label>

            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadowed-goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feComposite in2="shadow" in="goo" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>
        </nav>
    );
};

export default circleMenu;
