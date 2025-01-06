import './App.css';
import RatingSection from './components/RatingSection';
import CommentSection from './components/CommentSection';
import { useState } from 'react';
import useGetReviewApiData from './CustomHooks/useGetReviewApiData';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

function App() {

  const [page, setPage] = useState(1)
  const [selectedRating, setSelectedRating] = useState(null)
  const [showMoreClicked, setShowMoreClicked] = useState(false)
  const [totalRatingCount, setTotatRatingCount] = useState({})

  const { reviewData, aggregateData, loading } = useGetReviewApiData(page, selectedRating, showMoreClicked)

  return (
    <div className='w-screen h-screen bg-slate-400 bg-opacity-80 items-center md:flex flex-col'>
      <div className='bg-white h-full md:m-20 md:w-3/4 rounded-md'>
        <div className='flex flex-row-reverse'>
          <div className='w-7'>
            <ClearTwoToneIcon />
          </div>
        </div>
        <div className='flex flex-col md:flex md:flex-row'>
          <RatingSection
            aggregateData={aggregateData}
            page={page}
            setPage={setPage}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            setShowMoreClicked={setShowMoreClicked}
            totalRatingCount={totalRatingCount}
            setTotatRatingCount={setTotatRatingCount}
            loading={loading}
          />
          <CommentSection
            reviewData={reviewData}
            page={page}
            setPage={setPage}
            setShowMoreClicked={setShowMoreClicked}
            aggregateData={aggregateData}
            selectedRating={selectedRating}
            totalRatingCount={totalRatingCount}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
