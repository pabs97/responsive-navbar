import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.scss';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar__logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;