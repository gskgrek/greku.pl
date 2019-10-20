import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Slider from 'react-slick';

import ProjectsItem from './ProjectsItem';
import withWindowResizeHandler from '../../hoc/WithWindowResizeHandler/WithWindowResizeHandler';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './projects.module.scss';

function SliderNextArrow(props) {
    const { customClass, className, style, onClick } = props;
    return <button className={[customClass, className].join(' ')} style={{ ...style }} onClick={onClick} type="button" />;
}

function SliderPrevArrow(props) {
    const { customClass, className, style, onClick } = props;
    return <button className={[customClass, className].join(' ')} style={{ ...style }} onClick={onClick} type="button" />;
}

const projects = props => {
    const { windowWidth } = props;

    const slider_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: ((windowWidth - 680) >> 1) + 'px',
        prevArrow: <SliderPrevArrow customClass={css.slider__prev} />,
        nextArrow: <SliderNextArrow customClass={css.slider__next} />,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                    centerMode: true,
                },
            },
        ],
    };

    const list = useStaticQuery(graphql`
        query ProjectsListQuery {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        frontmatter {
                            id
                            title
                            for
                            range
                            techstack
                            thumb {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 600, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `).allMarkdownRemark.edges.map(item => {
        return <ProjectsItem key={item.node.frontmatter.id} data={item.node.frontmatter} />;
    });

    return (
        <section className={css.projects}>
            <h2>Projects</h2>

            <Slider className={css.slider} {...slider_settings}>
                {list}
            </Slider>
        </section>
    );
};

SliderNextArrow.propTypes = {
    customClass: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.instanceOf(Object),
    onClick: PropTypes.func,
};
SliderNextArrow.defaultProps = {
    customClass: '',
    className: '',
    style: null,
    onClick: null,
};

SliderPrevArrow.propTypes = {
    customClass: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.instanceOf(Object),
    onClick: PropTypes.func,
};
SliderPrevArrow.defaultProps = {
    customClass: '',
    className: '',
    style: null,
    onClick: null,
};

projects.propTypes = {
    windowWidth: PropTypes.number,
};
projects.defaultProps = {
    windowWidth: 0,
};

export default withWindowResizeHandler(projects);
