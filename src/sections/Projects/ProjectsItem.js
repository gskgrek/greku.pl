import React from 'react';
import Img from 'gatsby-image';

import css from './projects.module.scss';

const projectItem = props => {
    const props_data = { ...props };

    return (
        <div key={props_data.data.id}>
            <div className={css.slider__item}>
                <div>
                    <Img fluid={props_data.data.thumb.childImageSharp.fluid} className={css.slider__thumb} alt={props_data.data.title} />
                    <div className={css.slider__panel}>
                        <div className={css.slider__title}>{props_data.data.title}</div>
                        <div>
                            <b>Client:</b> {props_data.data.for}
                            <br />
                            <b>Scope of work:</b> {props_data.data.range}
                            <br />
                            <b>Tech stack:</b> {props_data.data.techstack}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectItem;
