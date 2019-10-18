import React from 'react';

import css from './header.module.scss';

const header = () => {
    return (
        <header className={css.header}>
            <div className={css.profile}>
                <div className={css.profile__avatar}>IMG</div>
                <h1 className={css.profile__title}>Grzegorz Sieczkowski</h1>
            </div>
        </header>
    );
};

export default header;
