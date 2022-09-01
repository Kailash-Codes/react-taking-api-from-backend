import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const Header = () => {
 
  return (
<>
{/* <!-- As a heading --> */}
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
    <span>
        <button className='btn btn-primary'>Signup</button>&ensp;
        <button  href="#" className='btn btn-outline-primary'>login</button>
        </span>
  </div>
</nav>
</>  )
}

export default Header;