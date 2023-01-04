import React, {useEffect, useState} from 'react'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [jobs, setJobs] = useState([])
    async function fetchJobs() {
        const response = await fetch(url)
        setJobs(await response.json())
    }

    useEffect(()=> {
        fetchJobs()
    },[])

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
