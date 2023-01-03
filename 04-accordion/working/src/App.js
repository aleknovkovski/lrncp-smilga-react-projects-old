import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const questionsList = data.map((question)=> {
  return (
      <SingleQuestion question={question}/>
  )
})

function App() {
  return (
      <div className="container">
        <h3>questions and answers about login</h3>
          <section className="info">
              {questionsList}
          </section>
      </div>
  )
}

export default App;
