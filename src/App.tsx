import './App.css';
import {Header} from './layout/Header/Header';
import {Main} from './layout/Main/Main';
import {About} from './layout/About/About';
import {Skills} from './layout/Skills/Skills';
import {Projects} from './layout/Projects/Projects';
import {Contacts} from './layout/Contacts/Contacts';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path = '/' element = {<Main />}/>
                    <Route path = '/about' element = {<About />}/>
                    <Route path = '/skills' element = {<Skills />}/>
                    <Route path = '/projects' element = {<Projects />}/>
                    <Route path = '/contacts' element = {<Contacts />}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;

