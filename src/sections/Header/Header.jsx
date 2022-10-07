import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';

import Icon from '../../components/Icon/Icon.jsx';

import * as css from './header.module.scss';

const header = () => {
    const avatar = useStaticQuery(graphql`
        query AvatarQuery {
            file(relativePath: { eq: "avatar.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 132
                        quality: 70
                    )
                }
            }
        }
    `);

    return (
        <header className={css.header}>
            <div className={css.profile}>
                <Icon className={css.profile__icon} type="vue" />
                <Icon className={css.profile__icon} type="react" />
                <Icon className={css.profile__icon} type="css3" />
                <Icon className={css.profile__icon} type="html5" />
                <Icon className={css.profile__icon} type="js" />
                <Icon className={css.profile__icon} type="laravel" />

                <div className={css.profile__avatar}>
                    <GatsbyImage image={avatar.file.childImageSharp.gatsbyImageData} alt="Grzegorz Sieczkowski" />
                </div>

                <h1 className={css.profile__title}>Grzegorz Sieczkowski</h1>
            </div>
        </header>
    );
};

export default header;
