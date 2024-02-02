import './App.css';
import styled from 'styled-components';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import About from './layout/About/About';
import Skills from './layout/Skills/Skills';
import Projects from './layout/Projects/Projects';
import Contacts from './layout/Contacts/Contacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <AppWrapper>
                <Header />
                    <AppWrapperContent>
                        <Routes>
                            <Route path = '/' element = {<Main />}/>
                            <Route path = '/about' element = {<About />}/>
                            <Route path = '/skills' element = {<Skills />}/>
                            <Route path = '/projects' element = {<Projects />}/>
                            <Route path = '/contacts' element = {<Contacts />}/>
                        </Routes>
                    </AppWrapperContent>
            </AppWrapper>
        </BrowserRouter>
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
