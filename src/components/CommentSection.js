import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import moment from "moment";
import { calculateStarRating } from '../utils/calculateStarRating';

const CommentSection = ({page, setPage, reviewData, setShowMoreClicked, aggregateData, selectedRating, totalRatingCount = {}}) => {

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
                <div key={user_id} className='m-4'>
                    <div className='flex flex-row'>
                        <img
                            className='w-12 h-12 rounded-full bg-slate-900 object-cover'
                            src={user.avatar_url}
                            alt='profile'
                        />
                        <div className='flex flex-col ml-4 w-full'>
                            <div>{user.name}</div>
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
                            <div className='ml-32 text-xs'>{formattedDate}</div>
                        </div>
                    </div>
                    <div className='mt-2'>{content}</div>
                </div>
            )
        })
    }

    return (
        <div className='w-3/5 h-full'>
            <div className='m-10'>
                <div className='overflow-y-scroll h-144'>
                {renderComments()}
                <div className='m-4'>
                {showMoreClickedBtn() && <button className='w-full h-12 mt-6 border border-gray-600 box-border rounded-md' onClick={onShowMoreClicked}>{calcShowMoreReviews()}</button>}
                </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;