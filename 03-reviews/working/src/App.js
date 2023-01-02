import React, {useState} from 'react';
import Review from './Review';
import data from "./data";

function App() {
  const [currentReview, setCurrentReview] = useState(0)
    function handleReviewChange(changeType) {
        if(changeType==='prev') {
            if(currentReview===0) {
                setCurrentReview(data.length-1)
            } else {
                setCurrentReview((prev)=> prev-1)
            }
        } else if(changeType==='next') {
            if(currentReview===data.length-1) {
                setCurrentReview(0)
            } else {
                setCurrentReview((prev)=> prev+1)
            }
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
