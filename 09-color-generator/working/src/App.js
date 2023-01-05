import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const defaultBase = '#f15025'
  const defaultColors = new Values(defaultBase).all(10)
  const [base, setBase] = useState(defaultBase)
  const [colors, setColors] = useState(defaultColors)

  function handleSubmit(e) {
    e.preventDefault()
    if(base[0]==="#" && base.length===7) {
      setColors(new Values(base).all(10))
    }
  }

  return (<>
    <section className="container">
      <h3>color generator</h3>
      <form onClick={handleSubmit}>
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
        colors.map((color, index)=> {
          return <SingleColor color={color} key={index}/>
        })
      }
    </section>
  </>)
}

export default App
