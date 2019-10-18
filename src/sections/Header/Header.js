import React from 'react';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import css from './header.module.scss';

const header = () => {
    const glowka = useStaticQuery(graphql`
        query GlowkaQuery {
            file(relativePath: { eq: "glowka.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 132, quality: 70) {
                        aspectRatio
                        base64
                        src
                        sizes
                    }
                }
            }
        }
    `);

    return (
        <header className={css.header}>
            <div className={css.profile}>
                <div className={css.profile__avatar}>
                    <Img fluid={glowka.file.childImageSharp.fluid} alt="Grzegorz Sieczkowski" />
                </div>
                <h1 className={css.profile__title}>Grzegorz Sieczkowski</h1>
            </div>
        </header>
    );
};

export default header;
