import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Name from './components/Name';
import HorizontalScroll from './components/HorizontalScroll';
import Projects from './components/Projects';
import SkillList from './components/SkillList';
import Socials from './components/Socials';
import Clock from './components/Clock';
import ScrollProgress from './components/ScrollProgress';


const navlinks = document.querySelector('.navlinks');
const navBody = ReactDOM.createRoot(navlinks);
navBody.render(<StrictMode><Navbar /></StrictMode>);

const clock = document.querySelector('#clock');
const clockBody = ReactDOM.createRoot(clock);
clockBody.render(<StrictMode><Clock /></StrictMode>);

const scroll = document.querySelector('#scrollPercentage');
const scrollBody = ReactDOM.createRoot(scroll);
scrollBody.render(<StrictMode><ScrollProgress /></StrictMode>);

const heroText = document.querySelector('.hero-text');
const heroBody = ReactDOM.createRoot(heroText);
heroBody.render(<StrictMode><Name /></StrictMode>);

const hscroll = document.querySelector('.hscroll');
const hscrollBody = ReactDOM.createRoot(hscroll);
hscrollBody.render(<StrictMode><HorizontalScroll /></StrictMode>);

const projects = document.querySelector('#projects');
const projectBody = ReactDOM.createRoot(projects);
projectBody.render(<StrictMode><Projects /></StrictMode>);

const langs = document.querySelector('#langs');
const langsBody = ReactDOM.createRoot(langs);
langsBody.render(<StrictMode><SkillList type="languages"/></StrictMode>);

const fworks = document.querySelector('#fws');
const fworksBody = ReactDOM.createRoot(fworks);
fworksBody.render(<StrictMode><SkillList type="fworks"/></StrictMode>);

const socials = document.querySelector("#socials");
const socialsBody = ReactDOM.createRoot(socials);
socialsBody.render(<StrictMode><Socials /></StrictMode>);

const copyright = document.querySelector('.copyright');
const copyrightBody = ReactDOM.createRoot(copyright);
const year = new Date().getFullYear();
copyrightBody.render(<StrictMode>© {year} Sai Sumakar</StrictMode>)

function setPathColor(paths, color){
  paths.map((path) => {
    path.setAttribute('fill', color);
  })
}

function changeNavBarColor(){
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('.section');
  const logoPaths = [...document.querySelectorAll('.svglogo path')]
  console.log(logoPaths)

  window.addEventListener('scroll', () => {
    let currentSection = null;
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 35 && rect.bottom > -35) {
        currentSection = section;
      }
    });
    
    if (currentSection && currentSection.classList.contains('white-background')) {
      navbar.style.color = 'black';
      setPathColor(logoPaths, 'black')
    } else if (currentSection && currentSection.classList.contains('black-background')) {
      navbar.style.color = 'white';
      setPathColor(logoPaths, 'white')
    }
    else if(currentSection && currentSection.classList.contains('hscroll')){
      navbar.style.color = 'black';
      setPathColor(logoPaths, 'black')
    }
  });
}
changeNavBarColor();

function updateSelectionStyles() {
  const sections = [...document.querySelectorAll(".section")]
  sections.forEach((sec) => {
    const textColor = getComputedStyle(sec).color
    const isWhite = textColor === "rgb(252, 246, 234)"
    if (isWhite) {
      sec.style.setProperty("--selection-color", "#171819");
      sec.style.setProperty("--selection-bg", "#FCF6EA");
    } else {
      sec.style.setProperty("--selection-color", "#FCF6EA");
      sec.style.setProperty("--selection-bg", "#171819");
    }
  })
}

updateSelectionStyles();/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Name from './components/Name';
import HorizontalScroll from './components/HorizontalScroll';
import Projects from './components/Projects';
import SkillList from './components/SkillList';
import Socials from './components/Socials';
import Clock from './components/Clock';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Clock />
      <ScrollProgress />
      <Name />
      <HorizontalScroll />
      <Projects />
      <SkillList type="languages" />
      <SkillList type="fworks" />
      <Socials />
      <Footer />
    </React.StrictMode>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>© {year} Sai Sumakar</footer>;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}

export default App;*/
