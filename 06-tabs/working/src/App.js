import React, {useEffect, useState} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [jobs, setJobs] = useState([])
    const [activeJob, setActiveJob] = useState(0)
    const [loading, setLoading] = useState(true)

    async function fetchJobs() {
        const response = await fetch(url)
        setJobs(await response.json())
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    const buttonsMarkup = jobs.map((job, index) => {
        const active = index === activeJob
        const jobClass = `job-btn ${active ? 'active-btn' : 'false'}`
        return (
            <button className={jobClass} key={index} onClick={() => setActiveJob(index)}>
                {job.company}
            </button>
        )
    })

    if (loading) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    const {title, duties, company, dates} = jobs[activeJob]

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
                <article className="job-info">
                    <h3>{title}</h3>
                    <h3>{company}</h3>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty) => {
                        return <div className="job-desc">
                            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                            <p>{duty}</p>
                        </div>
                    })}
                </article>
            </div>
            <button className="btn">
                more info
            </button>
        </section>
    )
}

export default App
