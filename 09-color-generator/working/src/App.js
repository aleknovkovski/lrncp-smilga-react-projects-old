import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import singleColor from "./SingleColor";

function App() {
  const defaultValues = new Values('#f15025')
  console.log(defaultValues.all(10))

  const [colors, setColors] = useState(defaultValues.all(10))

  return (<>
    <section className="container">
      <h3>color generator</h3>
      <form>
        <input type="text" placeholder="#f15025"/>
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
