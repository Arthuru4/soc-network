import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Header from './Header';
import Content from './Profile';

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
