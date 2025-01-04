import React, { useState } from 'react';
import useGetReviewApiData from '../CustomHooks/useGetReviewApiData';
import StarIcon from '@mui/icons-material/Star';
import moment from "moment";
import { calculateStarRating } from '../utils/calculateStarRating';

const CommentSection = ({page, setPage, reviewData}) => {

    const renderComments = () => {
        return reviewData?.map((comment) => {
            
            const {user, user_id, content ,rating, created_at} = comment

            const dateString = created_at
            const formattedDate = moment(dateString).format("MMM D, YYYY");

            return (
                <div key={user_id} className='m-8'>
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
            <div className='m-8 '>
                <div className='overflow-y-scroll h-144'>
                {renderComments()}
                <button className='w-full h-12 mt-6 bg-slate-200 rounded-md' onClick={() => setPage(page + 1)}>Show 10 more reviews</button>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;