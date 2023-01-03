import React, {useState} from 'react';
import Review from './Review';
import data from "./data";

function App() {
  const [currentReview, setCurrentReview] = useState(0)
    function validatedIndex(indexToCheck) {
      if(indexToCheck < 0) {
          return data.length-1
      }
      if (indexToCheck > data.length-1) {
          return 0
      }
      return indexToCheck
    }
    function handleReviewChange(changeType) {
        if(changeType==='prev') {
                setCurrentReview((prev)=> validatedIndex(prev-1))
        }
        if(changeType==='next') {
            setCurrentReview((prev)=> validatedIndex(prev+1))
        }

        if(changeType==='random') {
            const random = Math.floor(Math.random() * data.length);
            console.log(random)
            if (currentReview===random) {
                console.log('current review is same')
                setCurrentReview(()=> validatedIndex(random+1))
            } else {
                setCurrentReview(random)
            }
        }
    }

  return (
      <main>
          <Review data={data[currentReview]} handleChange={handleReviewChange}/>
      </main>
  );
}

export default App;
