//MainHeader.js located in src folder ./MainHeader
//export function MainHeader is used in App.js

// nav link needed to use active navigation links
import { NavLink } from 'react-router-dom';

//main header used to display the nav bar across all pages
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <center><nav>
        <ul style={{width:"80%", marginTop:"20px"}}>
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
            <NavLink activeClassName={classes.active} to='./memberLogin'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./login'>
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./SignUp'>
              Sign Up 
            </NavLink>
          </li>
        </ul>
      </nav></center>
    </header>
  );
};

export default MainHeader;