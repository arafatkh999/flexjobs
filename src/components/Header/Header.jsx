import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <Link
              to='/'
              aria-label='Home'
              title='Home'
            >
              Home
            </Link>
            </li>
        <li>
        <Link
              to='/statistics'
              aria-label='Statistics'
              title='Statistics'
            >
              Statistics
            </Link>
        </li>
        <li>
        <Link
              to='/jobs'
              aria-label='Applied Jobs'
              title='Applied Jobs'
            >
              Applied Jobs
            </Link>
        </li>
        <li>
        <Link
              to='/blog'
              aria-label='Blog'
              title='Blog'
            >
              Blog
            </Link>
        </li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Flexjobs</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
      <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
      </li>
      <li>

      <NavLink
              to='/statistics'
              aria-label='Statistics'
              title='Statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
      </li>
      <li>
        <NavLink
              to='/jobs'
              aria-label='Applied Jobs'
              title='Applied Jobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            
            >
              Applied Jobs
            </NavLink>
        </li>
        <li>
        <NavLink
              to='/blog'
              aria-label='Blog'
              title='Blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-accent">Star Applying</a>
  </div>
      </div>
        </div>
    );
};

export default Header;