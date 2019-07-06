import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import {BrowserRouter} from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Content state={props.state} addPost={props.addPost} updatePost={props.updatePost}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
