import React, { useState } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {


  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => setDrawerOpen(drawerOpen => !drawerOpen);
  const backdropClickHandler = () => setDrawerOpen(false);;
  let backdrop;

  if (drawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  // TODO: main height needs to be adjusted
  return (
    <div className="App" style={{ height: '100%' }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={drawerOpen} />
      {backdrop}
      <main style={{ marginTop: '4rem' }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
