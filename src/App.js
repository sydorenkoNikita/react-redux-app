import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {

       return (
              <BrowserRouter>
                     <div className='app-wrapper'>
                            <HeaderContainer />
                            <Navbar />
                            <div className='app-wrapper-content'>
                                   <Route path='/dialogs'
                                          render={() => <DialogsContainer />} />

                                   <Route path='/profile/:userId?'
                                          render={() => <ProfileContainer />} />

                                   <Route path='/users'
                                          render={() => <UsersContainer />} />


                            </div>
                     </div>
              </BrowserRouter>
       );
}

export default App;
