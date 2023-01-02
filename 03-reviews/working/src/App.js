import React, {useState} from 'react';
import Review from './Review';
import data from "./data";

function App() {
  const [currentReview, setCurrentReview] = useState(data[0])
  return <Review data={currentReview}/>;
}

export default App;
