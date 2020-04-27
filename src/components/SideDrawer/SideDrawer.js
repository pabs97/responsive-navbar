import React from 'react';
import './SideDrawer.scss';

const SideDrawer = props => {
  let navClasses = 'side-drawer';

  if (props.show) navClasses += ' --show';

  return (
    <nav className={navClasses}>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Users</a></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;