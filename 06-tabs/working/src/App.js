import React, {useEffect, useState} from 'react'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [jobs, setJobs] = useState([])
    const [activeJob, setActiveJob] = useState(0)
    async function fetchJobs() {
        const response = await fetch(url)
        setJobs(await response.json())
    }

    useEffect(()=> {
        fetchJobs()
    },[])

    const buttonsMarkup = jobs.map((job, index)=> {
        const active = index === activeJob
        const jobClass = `job-btn ${active ? 'active-btn' : 'false'}`
        return (
            <button className={jobClass} key={index} onClick={()=>setActiveJob(index)}>
                {job.company}
            </button>
        )
    })

  return (
      <section className="section">
        <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
        </div>
        <div className="jobs-center">
            <div className="btn-container">
                {buttonsMarkup}
            </div>
            <article className="job-info"></article>
        </div>
        <button className="btn">
            more info
        </button>
      </section>
  )
}

export default App
