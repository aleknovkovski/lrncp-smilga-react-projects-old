import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import singleColor from "./SingleColor";

function App() {
  const defaultBase = '#f15025'
  const defaultColors = new Values(defaultBase).all(10)
  const [base, setBase] = useState(defaultBase)
  const [colors, setColors] = useState(defaultColors)

  return (<>
    <section className="container">
      <h3>color generator</h3>
      <form>
        <input
            type="text"
            placeholder="#f15025"
            value={base}
            onChange={(e)=> setBase(e.target.value)}
        />
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
    <section className="colors">
      {
        colors.map((color)=> {
          return singleColor(color)
        })
      }
    </section>
  </>)
}

export default App
