import './App.css';
import RatingSection from './components/RatingSection';
import CommentSection from './components/CommentSection';
import { useState } from 'react';
import useGetReviewApiData from './CustomHooks/useGetReviewApiData';

function App() {

  const [page, setPage] = useState(1)

  const { reviewData, aggregateData } = useGetReviewApiData(page)

  return (
    <div className='w-screen h-screen bg-slate-400 flex flex-col items-center'>
      <div className='flex flex-row m-20 w-3/4 bg-white h-screen'>
        <RatingSection
          aggregateData={aggregateData}
        />
        <CommentSection
          reviewData={reviewData}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default App;
