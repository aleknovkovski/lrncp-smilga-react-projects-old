import React, {useState} from 'react';
import Review from './Review';
import data from "./data";

function App() {
  const [currentReview, setCurrentReview] = useState(0)
    function handleReviewChange(changeType) {
        if(changeType==='prev') {
            console.log('prev')
        } else if(changeType==='next') {
            console.log('next')
        } else if(changeType==='random') {
            console.log('random')
        }
    }

  return (
      <main>
          <Review data={data[currentReview]} handleChange={handleReviewChange}/>
      </main>
  );
}

export default App;
