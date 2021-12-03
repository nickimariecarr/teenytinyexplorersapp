import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <main className={classes.main}>{props.children}</main>
      <MainNavigation />

    </Fragment>
  );
};

export default Layout;