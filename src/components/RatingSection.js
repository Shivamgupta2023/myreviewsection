import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { calculateStarRating } from '../utils/calculateStarRating';
import { ratingObject } from '../constants';

const RatingSection = ({aggregateData, page, setPage,selectedRating, setSelectedRating, setShowMoreClicked, totalRatingCount, setTotatRatingCount}) => { 

    const { total, rating, counts=[] } = aggregateData || {}

    const sortCounts = counts.sort((a,b) => b.rating - a.rating)

    const onRatingClicked = (rating) => {
        setSelectedRating(rating)
        setPage(1)
        setShowMoreClicked(false)
    }

    const onClearFilter = () => {
        setSelectedRating(null)
        setPage(1)
    }

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
                    if(totalRatingCount[rating] !== count) {
                        let payload = {...totalRatingCount,
                            [rating]: count
                        }
                        setTotatRatingCount(payload)
                    }
                    return (
                        <div key={i} className='mt-4 flex flex-row'>
                        <div className='w-32 text-lg text-blue-800 cursor-pointer hover:text-black' onClick={() => onRatingClicked(rating)}>{ratingObject[rating][0]}</div>
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
            <div className='mt-8'>
                {selectedRating && <button className='bg-slate-400 h-10 w-28 rounded-md' onClick={onClearFilter}>
                    Clear Filter
                </button>}
            </div>
        </div>
    );
};

export default RatingSection;