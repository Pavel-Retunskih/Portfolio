import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';


function App() {
    return (
        <div className="App-wrapper">
            <Header />
            <div className='App-wrapper-content'>
                <Main/>
                <About/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </div>

        </div>
    );
}

export default App;

