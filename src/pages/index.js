import React from 'react';

import CircleMenu from '../components/Navigation/CircleMenu/CircleMenu';
import Header from '../sections/Header/Header';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import Education from '../sections/Education/Education';
import Footer from '../sections/Footer/Footer';

import './index.scss';

const IndexPage = () => {
    return (
        <div className="app">
            <CircleMenu />

            <Header />

            <main>
                <Projects />

                <Skills />

                <Experience />

                <Education />
            </main>

            <Footer />
        </div>
    );
};

export default IndexPage;
