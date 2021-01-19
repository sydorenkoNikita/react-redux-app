import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
       body{
              background-color: ${props => props.theme.mode === 'dark' ? '#0f0d21' : '#ffffff'};
              color: ${props => props.theme.mode === 'dark' ? '#393c7f' : '#111'};
       }
       
`


const App = (props) => {
       const [theme, setTheme] = useState({ mode: 'light' })
       return (
              <ThemeProvider theme={theme}>
                     <BrowserRouter>

                            <GlobalStyle />
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
                                          <Route path='/news'
                                                 render={() => <News />} />
                                   </div>
                                   <div className='themeBtn'>
                                   <button className='themeSwitch' onClick={e =>
                                          setTheme(
                                                 theme.mode === 'dark'
                                                        ? { mode: 'light' }
                                                        : { mode: 'dark' }
                                          )
                                   }>Dark theme <i className="fa fa-moon-o" aria-hidden="true"></i></button>
                                   </div>
                            </div>

                     </BrowserRouter>
              </ThemeProvider>
       );
}

export default App;
