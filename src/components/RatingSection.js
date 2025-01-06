import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { calculateStarRating } from '../utils/calculateStarRating';
import { ratingObject } from '../constants';
import RatingSectionSkeleton from './RatingSectionSkeleton';

const RatingSection = ({aggregateData, page, setPage,selectedRating, setSelectedRating, setShowMoreClicked, totalRatingCount, setTotatRatingCount, loading}) => { 

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


    if (loading) {
        return (
            <RatingSectionSkeleton />
        )
    }

    return (
        <div className='h-full w-full md:w-2/5'>
            <div className='p-2 md:ml-16 m-4 mt-4 md:mt-14'>
                <div>
                    <div className='text-lg'>Overall Rating</div>
                    <div className='flex flex-row items-center mt-1'>
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
                    {sortCounts.map((itm, i) => {
                        const { count, rating } = itm
                        const totalPercentage = (count / total) * 100
                        if (totalRatingCount[rating] !== count) {
                            let payload = {
                                ...totalRatingCount,
                                [rating]: count
                            }
                            setTotatRatingCount(payload)
                        }
                        return (
                            <div key={i} className='mt-4 flex flex-row'>
                                <div className='w-32 text-base text-blue-800 cursor-pointer hover:text-black' onClick={() => onRatingClicked(rating)}>{ratingObject[rating][0]}</div>
                                <div className='flex flex-row items-center'>
                                    <div className='mr-4 w-36 h-2 bg-gray-200 rounded'>
                                        <div className={`h-full w-full rounded ${ratingObject[rating][1]}`} style={{ width: `${Math.round(totalPercentage)}%` }}></div>
                                    </div>
                                </div>
                                <div className='ml-3'>{Math.round(totalPercentage)}%</div>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-8 flex flex-row justify-evenly'>
                    {selectedRating && <button className='h-10 w-28 rounded-md shadow-sm border border-slate-500 hover:bg-slate-100 hover:text-black text-blue-800' onClick={onClearFilter}>
                        Clear Filter
                    </button>}
                    {<button className={`h-10 rounded-md shadow-sm border border-slate-500 hover:bg-slate-100 ${selectedRating ? 'w-28' : 'w-full'} md:w-32`}>Write Review</button>}
                </div>
            </div>
        </div>
    );
};

export default RatingSection;