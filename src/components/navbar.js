import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <h1>Tech-Shope</h1>
        <form className='form'>
        <input type='text' placeholder='Search bar'/>
        </form>
    </div>
  )
}

export default Navbar