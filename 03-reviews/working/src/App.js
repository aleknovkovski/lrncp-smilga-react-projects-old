import React, {useState} from 'react';
import Review from './Review';
import data from "./data";

function App() {
  const [currentReview, setCurrentReview] = useState(0)
  return (
      <main>
          <Review data={data[currentReview]}/>
      </main>
  );
}

export default App;
