import React from 'react';

import css from './footer.module.scss';

const footer = () => (
    <footer className={css.footer}>
        <p>
            If you found a bug or think something can be done better, feel free to pull fix on my{' '}
            <a href="https://github.com/gskgrek/greku.pl" target="_blank" rel="noopener noreferrer">
                github
            </a>
            .
        </p>
    </footer>
);

export default footer;
