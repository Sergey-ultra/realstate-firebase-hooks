import React from 'react';
import './App.css';
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Setting";
import {BrowserRouter, Route} from 'react-router-dom';
import {updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='app-wrapper'>

                <Nav/>
                <div className='app_wrapper_content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}
                           />
                           }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
