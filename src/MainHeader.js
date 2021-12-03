import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='./home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./BecomeaHost'>
              Become a Host
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./FindaGroup'>
              Find a Group
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./SignUp'>
              Sign Up 
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./memberTable'>
              Members 
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./adminDashboard'>
              Admin 
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./adminGroups'>
              Admin Groups
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./adminMembers'>
              Admin Members
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;