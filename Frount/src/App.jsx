import './App.css';
import Head from './Components/head'
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Journey from './Components/Journey'
import LeetCode from './Components/LeetCode'
import Visionary from './Components/Visionary'
import Projects from './Components/Projects'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'

const loader = document.getElementById('loader');
if (loader) {
  loader.style.display = 'none';
}

function App(){
    return (
        <>
        <Head /> 
        <Profile />
        <Skills />
        <Journey />
        <LeetCode />
        <Visionary />
        <Projects />
        <Feedback />
        <Footer />
        </>
    );
}

export default App;