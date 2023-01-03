import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {

    const initialQuestions = data.map((question)=> {
        return {...question, opened: false}
    })

    const [questions, setQuestions] = useState(initialQuestions)


    function handleToggle(id) {
        console.log('need to toggle id of ' + id)
    }

    const questionsList = questions.map((question)=> {
        return (
            <SingleQuestion question={question} key={question.id} handleToggle={handleToggle}/>
        )
    })

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
