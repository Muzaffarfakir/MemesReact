import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './Home';
import Search from './Search';
import Save from './Save';
import PopupPage from './PopupPage';
function Navbar() {
  return (
    <>
      <BrowserRouter>
        <h2 className='text-center my-5  text-light'>
          Let's  Memes Together
        </h2>
        <hr className='my-3 bg-light border' />
        <div className='my-3 mx-auto d-flex text-center '>
          <nav >
            <Link className='text-light text-decoration-none mx-4' to={"/"}>Home </Link>
            <Link className='text-light text-decoration-none mx-4' to={"/Search"}>Search </Link>
            <Link className='text-light text-decoration-none mx-4' to={"/Save"}> Save</Link>
            <Link className='text-light d-none mx-5 ' to={"/PopupPage"}> PopupPage</Link>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Save' element={<Save />} />
          <Route path='/PopupPage' element={<PopupPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Navbar;
