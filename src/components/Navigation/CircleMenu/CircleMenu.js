import React from 'react';

import css from './circle-menu.module.scss';

const circleMenu = () => {
    const [isContactActive, setContactActive] = React.useState(false);

    return (
        <nav className={css.circleMenu}>
            <input id="circle-menu-toggler" type="checkbox" />
            <ul className={css.circleMenu__list}>
                <li className={[css.circleMenu__item, css.circleMenu__itemGreen].join(' ')}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a className={css.circleMenu__link} href="http://google.pl" />
                </li>
                <li className={[css.circleMenu__item, css.circleMenu__itemBlue].join(' ')}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a className={css.circleMenu__link} href="http://google.pl" />
                </li>
                <li className={[css.circleMenu__item, css.circleMenu__itemYellow].join(' ')}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a className={css.circleMenu__link} href="http://google.pl" />
                </li>
                <li className={[css.circleMenu__item, css.circleMenu__itemOrange, isContactActive ? css.circleMenu__itemActive : ''].join(' ')}>
                    <div className={css.circleMenu__content}>Lorem ipsum</div>
                    <button type="button" className={css.circleMenu__link} onClick={() => setContactActive(!isContactActive)} onKeyDown={() => null} />
                </li>
            </ul>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="circle-menu-toggler" className={css.circleMenu__toggle}>
                <span />
            </label>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
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
