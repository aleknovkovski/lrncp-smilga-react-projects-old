import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    console.log(items)
    function handleMenuClicks(e) {
        console.log(e.target.innerHTML)
    }

  return (
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories handleClick={handleMenuClicks}/>
        <Menu items={items}/>
      </section>
  );
}

export default App;
