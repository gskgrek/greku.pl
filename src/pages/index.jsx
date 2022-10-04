import React from 'react';
import { Router } from '@reach/router';

import CircleMenu from '../components/Navigation/CircleMenu/CircleMenu.jsx';
import Header from '../sections/Header/Header.jsx';
import Projects from '../sections/Projects/Projects.jsx';
import Skills from '../sections/Skills/Skills.jsx';
import Experience from '../sections/Experience/Experience.jsx';
import Education from '../sections/Education/Education.jsx';
import Footer from '../sections/Footer/Footer.jsx';
import Project from '../sections/Projects/Project.jsx';

import './index.scss';

function IndexPage() {
  return <div className="app">
        <CircleMenu />

        <Header />

        <main>
            <Projects />

            <Skills />

            <Experience />

            <Education />

            <Router>
                <Project path="/projects/:slug" />
            </Router>
        </main>

        <Footer />
    </div>
}

export default IndexPage;
