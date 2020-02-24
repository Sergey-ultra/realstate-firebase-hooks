import React from 'react';
import './App.css';
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import Music from "./components/music/Music";
import Settings from "./components/settings/Setting";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Profile from "./components/profile/Profile";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='app-wrapper'>

                <Nav/>
                <div className='app_wrapper_content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>
                           }/>
                    <Route path='/profile'
                           render={() => <Profile/>
                           }/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
