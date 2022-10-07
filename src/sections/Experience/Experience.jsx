import React from 'react';

import * as css from './experience.module.scss';

const experience = () => (
    <section className={css.experience}>
        <div className={['container', css.container].join(' ')}>
            <h2>Commercial experience</h2>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2020-2023</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>10Clouds Sp. z o. o. - SENIOR FRONT-END DEVELOPER - Contract</div>
                    <p>react, vue, react-native</p>
                </div>
            </div>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2018-2019</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>Albedo Marketing Sp. z o. o. - FRONT-END DEVELOPER - Contract</div>
                    <p>vue, html, css, javascript, smarty, jquery, ajax</p>
                </div>
            </div>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2013-2018</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>H7 Agency Sp. z o. o. - SENIOR WEB DEVELOPER - Contract</div>
                    <p>flash/actionscript, html, css, javascript, smarty, jquery, ajax, php, laravel</p>
                </div>
            </div>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2009-2013</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>WideOpen sp. z o. o. - WEB & MOBILE DEVELOPER - Contract</div>
                    <p>flash/actionscript, html, css, javascript, smarty, jquery, ajax</p>
                </div>
            </div>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2010-2013</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>Mad Kittens Interactive s. c. - FRONT-END DEVELOPER - Co-founder</div>
                    <p>html, css, javascript, smarty, jquery, ajax</p>
                </div>
            </div>

            <div className={css.experience__item}>
                <div className={css.experience__date}>2008-2009</div>
                <div className={css.experience__line} />
                <div className={css.experience__text}>
                    <div className={css.experience__title}>CGS Studio – FLASH & WEB DEVELOPER - UoP</div>
                    <p>flash/actionscript, html, css, javascript, smarty, mysql, php</p>
                </div>
            </div>
        </div>
    </section>
);

export default experience;
