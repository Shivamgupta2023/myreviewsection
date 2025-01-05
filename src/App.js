import './App.css';
import RatingSection from './components/RatingSection';
import CommentSection from './components/CommentSection';
import { useState } from 'react';
import useGetReviewApiData from './CustomHooks/useGetReviewApiData';

function App() {

  const [page, setPage] = useState(1)
  const [selectedRating, setSelectedRating] = useState(null)
  const [showMoreClicked, setShowMoreClicked] = useState(false)
  const [totalRatingCount, setTotatRatingCount] = useState({})

  const { reviewData, aggregateData } = useGetReviewApiData(page, selectedRating, showMoreClicked)

  return (
    <div className='w-screen h-screen bg-slate-400 flex flex-col items-center'>
      <div className='flex flex-row m-20 w-3/4 bg-white h-screen'>
        <RatingSection
          aggregateData={aggregateData}
          page={page}
          setPage={setPage}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          setShowMoreClicked={setShowMoreClicked}
          totalRatingCount={totalRatingCount}
          setTotatRatingCount={setTotatRatingCount}
        />
        <CommentSection
          reviewData={reviewData}
          page={page}
          setPage={setPage}
          setShowMoreClicked={setShowMoreClicked}
          aggregateData={aggregateData}
          selectedRating={selectedRating}
          totalRatingCount={totalRatingCount}
        />
      </div>
    </div>
  );
}

export default App;
