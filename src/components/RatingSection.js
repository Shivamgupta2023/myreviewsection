import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { calculateStarRating } from '../utils/calculateStarRating';

const ratingObject = {
    1: ['Poor', 'bg-red-500'],
    2: ['Below Average', 'bg-yellow-600'],
    3: ['Average', 'bg-yellow-300'],
    4: ['Good', 'bg-green-400'],
    5: ['Excellent', `bg-green-700`]
}

const RatingSection = ({aggregateData}) => {

    const { total, rating, counts=[] } = aggregateData || {}

    const sortCounts = counts.sort((a,b) => b.rating - a.rating)


    return (
        <div className='w-2/5 h-full m-8 mt-14 ml-16'>
            <div>
                <div className='text-lg'>Overall Rating</div>
                <div className='flex flex-row items-center mt-2'>
                    <div className='text-lg'>{rating}</div>
                    <div className='flex flex-row ml-2'>
                        {calculateStarRating(Math.round(rating)).map((star, i) => {
                            return (
                                <span key={i}>
                                    {star ? <StarIcon className='text-yellow-300' /> : <StarIcon className='text-gray-300' />}
                                </span>
                            )
                        })}
                    </div>
                    <div className='ml-2'>Based on {total} reviews</div>
                </div>
            </div>
            <div className='mt-8'>
                {sortCounts.map((itm,i) => {
                    const { count, rating } = itm
                    const totalPercentage = (count/total) * 100
                    return (
                        <div key={i} className='mt-4 flex flex-row'>
                        <div className='w-32'>{ratingObject[rating][0]}</div>
                        <div className='flex flex-row items-center'>
                            <div className='ml-8 w-36 h-2 bg-gray-200 rounded'>
                                <div className={`h-full w-full rounded ${ratingObject[rating][1]}`} style={{ width: `${Math.round(totalPercentage)}%`}}></div>
                            </div>
                        </div>
                        <div className='ml-3'>{Math.round(totalPercentage)}%</div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default RatingSection;