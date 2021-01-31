import React from 'react';

import css from './skils.module.scss';
import Icon from '../../components/Icon/Icon';

const skills = () => (
    <section className={css.skills}>
        <div className={['container', css.container].join(' ')}>
            <h2>Skills</h2>

            <ul className={css.set}>
                <li>
                    <Icon className={css.icon} type="html5" /> 10 years experience in front-end development
                </li>
                <li>
                    <Icon className={css.icon} type="css3" /> Working for advertisement studios, software houses and individual clients
                </li>
                <li>
                    <Icon className={css.icon} type="js" />
                </li>
            </ul>

            <ul className={css.set}>
                <li>
                    <Icon className={css.icon} type="react" /> 1 year of commercial experience
                </li>
            </ul>

            <ul className={css.set}>
                <li>
                    <Icon className={css.icon} type="vue" /> 1 year of commercial experience
                </li>
            </ul>

            <ul className={css.set}>
                <li>
                    <Icon className={css.icon} type="laravel" /> 2.5 years of commercial experience
                </li>
            </ul>
        </div>
    </section>
);

export default skills;
