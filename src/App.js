import React, { useState } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {


  // drawerToggleClickHandler = () => {
  //   this.setState
  // }

  return (
    <div className="App" style={{ height: '100%' }}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
      <main style={{ marginTop: '4rem' }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
