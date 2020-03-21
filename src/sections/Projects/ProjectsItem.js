import React from 'react';
import Img from 'gatsby-image';

import css from './projects.module.scss';

const projectItem = props => {
    const propsData = { ...props };

    return (
        <div key={propsData.data.id}>
            <div className={css.slider__item}>
                <div>
                    <Img fluid={propsData.data.thumb.childImageSharp.fluid} className={css.slider__thumb} alt={propsData.data.title} />
                    <div className={css.slider__panel}>
                        <div className={css.slider__title}>{propsData.data.title}</div>
                        <div>
                            <b>Client:</b> {propsData.data.for}
                            <br />
                            <b>Scope of work:</b> {propsData.data.range}
                            <br />
                            <b>Tech stack:</b> {propsData.data.techstack}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectItem;
