import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Unauthorized from './components/common/Unauthorized'
import Login from './components/Login/Login';
import BookList from './components/BookList/BookList';
import Signup from './components/Signup/Signup';
import AuthenticatedRoute from './components/Authentication/AuthRouting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        {/* <AuthenticatedRoute>
          <Route path='/books' element={<BookList />}></Route>
        </AuthenticatedRoute> */}
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Unauthorized />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;