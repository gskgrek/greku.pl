import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import hastToHyperscript from 'hast-to-hyperscript';

import { disableDocumentScroll, enableDocumentScroll } from '../../utils/dom';

import css from './project.module.scss';

const Project = (props) => {
    const { slug } = props;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        disableDocumentScroll();
        setVisible(true);

        return () => {
            enableDocumentScroll();
        };
    }, []);

    const [
        {
            node: { frontmatter: projectData, htmlAst },
        },
    ] = useStaticQuery(graphql`
        query ProjectsQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            id
                            slug
                            title
                            for
                            range
                            techstack
                            gallery {
                                id
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 1000, quality: 100) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                        htmlAst
                    }
                }
            }
        }
    `).allMarkdownRemark.edges.filter((item) => item.node.frontmatter.slug === slug);

    const projectDescription = hastToHyperscript(React.createElement, htmlAst);

    const handleCloseClick = () => {
        setVisible(false);
        setTimeout(() => {
            window.history.back();
        }, 400);
    };

    return (
        <div className={[css.project, visible ? css.visible : ''].join(' ')}>
            <div className={css.project__wrapper}>
                <div className={css.project__backdrop} />
                <div className={css.project__content}>
                    <button type="button" aria-label="close" onClick={handleCloseClick} className={css.project__close} />
                    <h3 className={css.project__title}>{projectData.title}</h3>
                    <div className={css.project__info}>
                        {projectData.for && (
                            <div>
                                <b>Client:</b> {projectData.for}
                            </div>
                        )}
                        {projectData.range && (
                            <div>
                                <b>Scope of work:</b> {projectData.range}
                            </div>
                        )}
                        {projectData.techstack && (
                            <div>
                                <b>Tech stack:</b> {projectData.techstack}
                            </div>
                        )}
                    </div>
                    <div className={css.project__description}>{projectDescription}</div>
                    <div className={css.project__gallery}>
                        {projectData.gallery.map((galleryItem) => (
                            <Img key={galleryItem.id} fluid={galleryItem.childImageSharp.fluid} className={css.project__gallery__image} alt="" backgroundColor durationFadeIn={1000} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    slug: PropTypes.string,
};
Project.defaultProps = {
    slug: '',
};

export default Project;
