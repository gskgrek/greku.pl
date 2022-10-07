import React from 'react';

import * as css from './education.module.scss';

const education = () => (
    <section className={css.education}>
        <div className={['container', css.container].join(' ')}>
            <h2>Education</h2>

            <div className={css.education__item}>
                <div className={css.education__date}>2002-2008</div>
                <div className={css.education__line} />
                <div className={css.education__text}>
                    <div className={css.education__title}>Wrocław University of Science and Technology</div>
                    <p>
                        <b>Kierunek:</b> Fizyka
                        <br />
                        <b>Specjalność:</b> Fizyka Komputerowa
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default education;
