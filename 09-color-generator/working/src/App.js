import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const color = new Values('hsl(204deg 100% 50% / 1)')
  console.log(color.all(10))
  return (<>
    <section className="container">
      <h3>color generator</h3>
      <form>
        <input type="text" placeholder="#f15025"/>
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
    <section className="colors"></section>
  </>)
}

export default App
