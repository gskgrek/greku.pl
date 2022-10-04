import React from 'react';

import * as css from './experience.module.scss';

const experience = () => (
    <section className={css.experience}>
        <div className={['container', css.container].join(' ')}>
            <h2>Commercial experience</h2>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2008-2009</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>CGS Studio – FLASH & WEB DEVELOPER – umowa o pracę</div>
                    <p>Wykonanie projektów w technologiach HTML/CSS/Flash. Prezentacje i aplikacje RIA.</p>
                </div>
            </div>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2008-2009</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>CGS Studio – FLASH & WEB DEVELOPER – umowa o pracę</div>
                    <p>Wykonanie projektów w technologiach HTML/CSS/Flash. Prezentacje i aplikacje RIA.</p>
                </div>
            </div>
        </div>
    </section>
);

export default experience;
