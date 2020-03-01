import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer"
import Nav from "./components/nav/Nav";
import Music from "./components/music/Music";
import Settings from "./components/settings/Setting";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className='app-wrapper'>

                <Nav/>
                <div className='app_wrapper_content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>
                           }/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>
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
