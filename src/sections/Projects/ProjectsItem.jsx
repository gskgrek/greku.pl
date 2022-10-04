import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from '@reach/router';

import * as css from './projects.module.scss';

const projectItem = (props) => {
    const { data } = props;

    return (
        <Link to={`/projects/${data.slug}`} key={data.id}>
            <div className={css.slider__item}>
                <div>
                    <GatsbyImage image={data.thumb.childImageSharp.gatsbyImageData} className={css.slider__thumb} alt={data.title} />
                    <div className={css.slider__panel}>
                        <div className={css.slider__title}>{data.title}</div>
                        <div>
                            {data.for && (
                                <div>
                                    <b>Client:</b> {data.for}
                                </div>
                            )}
                            {data.range && (
                                <div>
                                    <b>Scope of work:</b> {data.range}
                                </div>
                            )}
                            {data.techstack && (
                                <div>
                                    <b>Tech stack:</b> {data.techstack}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default projectItem;
