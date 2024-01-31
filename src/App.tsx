import './App.css';
import styled from 'styled-components';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import About from './layout/About/About';
import Skills from './layout/Skills/Skills';
import Projects from './layout/Projects/Projects';
import Contacts from './layout/Contacts/Contacts';


function App() {
    return (
        <div className="App-wrapper">
            <Header />
            <div className='App-wrapper-content'>
                <Main/>
                {/* <About/>
                <Skills/>
                <Projects/>
                <Contacts/> */}
            </div>

        </div>
    );
}

export default App;

