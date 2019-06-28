import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Content from './components/Profile/Profile';

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Content/>
        </div>
    );
}

export default App;
