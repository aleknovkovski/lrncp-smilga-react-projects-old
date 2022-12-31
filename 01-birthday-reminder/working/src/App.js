import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className="container">
      <h3>{`${data.length} birthdays today`}</h3>
      <List data={data}/>
      <button onClick={()=> console.log('you clicked me')}>Clear All</button>
    </section>
  </main>;
}

export default App;
