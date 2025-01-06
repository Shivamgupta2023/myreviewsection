import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const RatingSectionSkeleton = () => {

    const renderDummmyProgress = () => {
        return (
            <div className='mt-4 flex flex-row'>
                <div className='w-32 text-base text-slate-500 cursor-pointer hover:text-black'>Excellent</div>
                <div className='flex flex-row items-center'>
                    <div className='mr-4 w-36 h-2 bg-gray-200 rounded'>
                        <div className={`h-full w-full rounded`} style={{ width: `0%` }}></div>
                    </div>
                </div>
                <div className='ml-3'>0%</div>
            </div>
        )
    }

    return (
        <div className='h-full w-screen md:w-2/5'>
        <div className='p-2 md:ml-16 mt-14 m-4'>
            <div>
                <div className='text-lg'>Overall Rating</div>
                <div className='flex flex-row items-center mt-2'>
                    <div className='text-lg'>0</div>
                    <div className='flex flex-row ml-2'>
                        <span><StarIcon className='text-gray-300' /></span>
                        <span><StarIcon className='text-gray-300' /></span>
                        <span><StarIcon className='text-gray-300' /></span>
                        <span><StarIcon className='text-gray-300' /></span>
                        <span><StarIcon className='text-gray-300' /></span>
                    </div>
                </div>
            </div>
                <div className='mt-8'>
                    {renderDummmyProgress()}
                    {renderDummmyProgress()}
                    {renderDummmyProgress()}
                    {renderDummmyProgress()}
                    {renderDummmyProgress()}
            </div>
            <div className='mt-8 flex flex-row justify-evenly'>
                {<button className={`h-10 rounded-md shadow-sm border border-slate-500 hover:bg-slate-100 w-full md:w-28`}>Write Review</button>}
            </div>
        </div>
    </div>
    )
};

export default RatingSectionSkeleton;