import './App.css';
import styled from 'styled-components';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import About from './layout/About/About';
import Skills from './layout/Skills/Skills';
import Projects from './layout/Projects/Projects';
import Contacts from './layout/Contacts/Contacts';
import { Routes } from 'react-router-dom';


function App() {
    return (
        <AppWrapper>
            <Header />

            <Routes>
            <AppWrapperContent>
                <Main/>
                {/* <About/>
                <Skills/>
                <Projects/>
                <Contacts/> */}
            </AppWrapperContent>
            </Routes>
            
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
    margin: 0 auto;
    margin-top: 70px;
    width: 100%;
    max-width: 1200px;
`
const AppWrapperContent = styled(AppWrapper)`
    margin-top: 126px;
`
