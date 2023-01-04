import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  return (
      <section className="section">
        <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
        </div>
        <div className="jobs-center">
            <div className="btn-container"></div>
            <article className="job-info"></article>
        </div>
        <button className="btn">
            more info
        </button>
      </section>
  )
}

export default App
