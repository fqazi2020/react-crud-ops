import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navbar= () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  
  <a className="navbar-brand" href='#'>Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
    <NavLink exact to="/" className="nav-link"  >Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink exact to="/Contact" className="nav-link" >Contact</NavLink>
    </li>
    <li className="nav-item">
    <NavLink exact to="/Users" className="nav-link"   >Users</NavLink>
    </li>
      
    </ul>
  </div>
  <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
</nav>
    )
}
export default Navbar;