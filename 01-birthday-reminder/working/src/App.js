import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [list, setList] = useState(data);
  function clearData(){setList([])}

  return <main>
    <section className="container">
      <h3>{`${data.length} birthdays today`}</h3>
      <List data={list}/>
      <button onClick={clearData}>Clear All</button>
    </section>
  </main>;
}

export default App;
