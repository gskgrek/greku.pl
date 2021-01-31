import React from 'react';
import * as PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';

import withWindowResizeHandler from 'hoc/WithWindowResizeHandler/WithWindowResizeHandler';
import ProjectsItem from './ProjectsItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './projects.module.scss';

function SliderNextArrow(props) {
    const { customClass, className, style, onClick } = props;
    return <button aria-label="Next" className={[customClass, className].join(' ')} style={{ ...style }} onClick={onClick} type="button" />;
}

function SliderPrevArrow(props) {
    const { customClass, className, style, onClick } = props;
    return <button aria-label="Previous" className={[customClass, className].join(' ')} style={{ ...style }} onClick={onClick} type="button" />;
}

const projects = (props) => {
    const { windowWidth } = props;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: `${Math.round((windowWidth - 680) / 2)}px`,
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
                            slug
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
    `).allMarkdownRemark.edges.map((item) => <ProjectsItem key={item.node.frontmatter.id} data={item.node.frontmatter} />);

    return (
        <section id="projects" className={css.projects}>
            <h2>Projects</h2>

            <Slider className={css.slider} {...sliderSettings}>
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
