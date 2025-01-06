import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import moment from "moment";
import { calculateStarRating } from '../utils/calculateStarRating';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';

const CommentSection = ({page, setPage, reviewData, setShowMoreClicked, aggregateData, selectedRating, totalRatingCount = {}, loading}) => {

    const { total } = aggregateData || {}

    const onShowMoreClicked = () => {
        setShowMoreClicked(true)
        setPage(page + 1)
    }

    let totalReviews = selectedRating ? totalRatingCount[selectedRating] : total

    const showMoreClickedBtn = () => {
        if(reviewData?.length < totalReviews) {
            return true
        } else return false
    }

    const calcShowMoreReviews = () => {
        let leftReviews = totalReviews - reviewData.length
        if(leftReviews >= 12) {
            return 'Show 12 more reviews'
        } else {
            return `Show ${leftReviews} more reviews`
        }
    }

    const renderComments = () => {
        return reviewData?.map((comment) => {

            const {user, user_id, content ,rating, created_at} = comment

            const dateString = created_at
            const formattedDate = moment(dateString).format("MMM D, YYYY");

            return (
                <div key={user_id} className='m-2 mt-6 md:m-4'>
                    <div className='flex flex-row'>
                        {user.avatar_url ? (
                            <img
                                className='rounded-full flex items-center justify-center bg-slate-900 object-cover w-10 h-10 md:w-12 md:h-12'
                                src={user.avatar_url}
                                alt='profile'
                            />
                        ) : (
                            <div className='w-10 h-10 md:w-12 md:h-12'>
                                <div
                                    className='rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-red-800'
                                >
                                    <span className='text-white'>
                                        {user.name.slice(0, 2).toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        )}
                        
                        <div className='flex flex-col ml-4 w-full'>
                            <div className='text-sm md:text-lg'>{user.name}</div>
                            <div className='flex flex-row'>
                            {calculateStarRating(rating).map((star,i) => {
                                return (
                                    <span key={i}>
                                        {star ? <StarIcon className='text-yellow-300'/> : <StarIcon className='text-gray-300'/>}
                                    </span>
                                )
                            })}
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end'>
                            <div className='text-xs md:ml-32'>{formattedDate}</div>
                        </div>
                    </div>
                    <div className='mt-2 text-s md:text-base'>{content}</div>
                </div>
            )
        })
    }

    if(!reviewData.length && !loading) {
        return (
            <div className='h-full w-full flex flex-col items-center justify-center md:w-3/5'>
                <ReviewsTwoToneIcon/>
                <div className='text-xl mt-4'>No reviews yet!</div>
                <div className='mt-4'>Be the first to review this product</div>
            </div>
        )
    }

    return (
        <div className='h-full w-full md:w-3/5'>
            <div className='m-4 md:m-10'>
                <div className='overflow-y-scroll h-144'>
                    {renderComments()}
                    <div className='md:m-4'>
                        {showMoreClickedBtn() && <button className='w-full h-12 mt-6 border border-gray-600 box-border rounded-md' onClick={onShowMoreClicked}>{calcShowMoreReviews()}</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;