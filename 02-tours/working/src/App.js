import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  async function fetchTours() {
    const response = await fetch(url)
    const toursData = await response.json()
    console.log(toursData)
    setTours(toursData)
    setIsLoading(false)
  }

  useEffect(()=> {
    fetchTours()
  },[])

  if(isLoading) {
    return <Loading />
  } else {
    return (
        <main>
          <Tours tours={tours}/>
        </main>
    )
  }
}

export default App
