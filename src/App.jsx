import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import User from './components/Users';
import Login from './components/Login';
import AddUsers from './components/AddUsers';
import PagenotFound from './components/PagenotFound';
import Calculator from './components/Calculator';
import Weather from './components/Weather';
import TimerData from './components/Timer';
import GuessingGame from './components/GuessingGame';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='users' element={<User/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addusers' element={<AddUsers/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/timer' element={<TimerData/>}/>
      <Route path='/games' element={<GuessingGame/>}/>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
