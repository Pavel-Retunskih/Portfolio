import './App.css';
import {Header} from './layout/Header/Header';
import {Main} from './layout/Main/Main';
import {About} from './layout/About/About';
import {Skills} from './layout/Skills/Skills';
import {Projects} from './layout/Projects/Projects';
import {Contacts} from './layout/Contacts/Contacts';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { SparklesCore } from './components/particles/Particles';



function App() {
    return (
        <BrowserRouter>
            <SparklesCore
                background="transparent"
                minSize={0.3}
                maxSize={1}
                particleDensity={100}
                particleColor="rgb(231, 15, 170))"
            />
            <Header />
                <Routes>
                    <Route path = '/Portfolio/' element = {<Main />}/>
                    <Route path = '/Portfolio/about' element = {<About />}/>
                    <Route path = '/Portfolio/skills' element = {<Skills />}/>
                    <Route path = '/Portfolio/projects' element = {<Projects />}/>
                    <Route path = '/Portfolio/contacts' element = {<Contacts />}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
