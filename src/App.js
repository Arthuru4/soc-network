import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;
