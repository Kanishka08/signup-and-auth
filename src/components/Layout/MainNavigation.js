import { Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../Store/AuthContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler =()=>{
    authCtx.logout()
  }

  useEffect(() => {
    if (!authCtx.login) {
      return;
    }
    setTimeout(() => {
      authCtx.logout();
    }, 5 * 60 * 1000);
  }, [authCtx]);


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (   
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;