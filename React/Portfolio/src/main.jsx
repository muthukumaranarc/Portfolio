import Head from "./head";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Head from './head'
import Profile from './Profile'
import Skills from './Skills'
import Journey from './Journey'
import LeetCode from './LeetCode'
import Visionary from './Visionary'
import Projects from './Projects'
import Feedback from './Feedback'
import Footer from './Footer'

const loader = document.getElementById('loader');
if (loader) {
  loader.style.display = 'none';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head /> 
    <Profile />
    <Skills />
    <Journey />
    <LeetCode />
    <Visionary />
    <Projects />
    <Feedback />
    <Footer />
  </StrictMode>,
)
