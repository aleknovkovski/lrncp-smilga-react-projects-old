import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const questionsList = data.map((question)=> {
  return <h4>{question.title}</h4>
})

function App() {
  return questionsList
}

export default App;
