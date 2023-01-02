import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  async function fetchTours() {
    const response = await fetch(url)
    const toursData = await response.json()
    console.log(toursData)
  }

  useEffect(()=> {
    fetchTours()
  },[])

  if(isLoading) {
    return <Loading />
  } else {
    return <Tours />
  }
}

export default App
