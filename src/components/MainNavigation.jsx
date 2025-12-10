import React, { useState } from 'react';

// Import all components
import GlanceComponent from '../glance/glance-component.jsx';
import FurnitureComponent from '../furniture/furniture-component.jsx';
import HelloWorldComponent from '../hello-world/hello-world-component.jsx';
import FlexBoxComponent from '../hello-world/flex-box-component.jsx';
import WelcomeComponent from '../hello-world/welcome.jsx';
import OurPromiseComponent from '../our-promise/our-promise-component.jsx';
import OurCourseComponent from '../ourcourses/our-course-component.jsx';
import HomeComponent from '../portfolio/home-component.jsx';
import AboutComponent from '../portfolio/about-component.jsx';
import SkillsComponent from '../portfolio/skills-component.jsx';
import ProjectsComponent from '../portfolio/projects-component.jsx';
import PortfolioContactComponent from '../portfolio/contact-component.jsx';
import NavigationComponent from '../portfolio/navigation-component.jsx';
import RegistrationPageComponent from '../registration-page/registration-page-component.jsx';
import TrainingComponent from '../training/training-component.jsx';
import UseEffectPracticeComponent from '../use-effect-practice/use-effect-practice.jsx';
import UseStateFormComponent from '../use-state-form/use-state-form-component.jsx';
import UseStateFormsComponent from '../use-state-forms/use-state-form-component.jsx';
import UseStateComponent from '../usestate/use-state-component.jsx';
import UseState1stComponent from '../usestate-1st/use-state-component.jsx';

const MainNavigation = () => {
  const [activeComponent, setActiveComponent] = useState('glance');

  const components = {
    glance: { name: 'Glance', component: <GlanceComponent /> },
    furniture: { name: 'Furniture', component: <FurnitureComponent /> },
    helloWorld: { name: 'Hello World', component: <HelloWorldComponent /> },
    flexBox: { name: 'Flex Box', component: <FlexBoxComponent /> },
    welcome: { name: 'Welcome', component: <WelcomeComponent /> },
    ourPromise: { name: 'Our Promise', component: <OurPromiseComponent /> },
    ourCourse: { name: 'Our Courses', component: <OurCourseComponent /> },
    registration: { name: 'Registration', component: <RegistrationPageComponent /> },
    training: { name: 'Training', component: <TrainingComponent /> },
    useEffect: { name: 'UseEffect Practice', component: <UseEffectPracticeComponent /> },
    useStateForm: { name: 'UseState Form', component: <UseStateFormComponent /> },
    useStateForms: { name: 'UseState Forms', component: <UseStateFormsComponent /> },
    useState: { name: 'UseState', component: <UseStateComponent /> },
    useState1st: { name: 'UseState 1st', component: <UseState1stComponent /> },
    portfolio: { name: 'portfolio', component: <NavigationComponent /> }
  };

  const styles = {
    mainNavigation: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    navbar: {
      backgroundColor: '#2c3e50',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    navBrand: {
      color: '#ecf0f1',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    navLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    navButton: {
      backgroundColor: '#34495e',
      color: '#ecf0f1',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease'
    },
    navButtonActive: {
      backgroundColor: '#3498db',
      color: '#fff'
    },
    componentContainer: {
      flex: 1,
      padding: '2rem',
      overflow: 'auto',
      backgroundColor: '#f8f9fa'
    }
  };

  return (
    <div style={styles.mainNavigation}>
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>React Components</div>
        <div style={styles.navLinks}>
          {Object.entries(components).map(([key, { name }]) => (
            <button
              key={key}
              style={{
                ...styles.navButton,
                ...(activeComponent === key ? styles.navButtonActive : {})
              }}
              onClick={() => setActiveComponent(key)}
              onMouseEnter={(e) => {
                if (activeComponent !== key) {
                  e.target.style.backgroundColor = '#4a6741';
                }
              }}
              onMouseLeave={(e) => {
                if (activeComponent !== key) {
                  e.target.style.backgroundColor = '#34495e';
                }
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </nav>
      <div style={styles.componentContainer}>
        {components[activeComponent]?.component}
      </div>
    </div>
  );
};

export default MainNavigation;