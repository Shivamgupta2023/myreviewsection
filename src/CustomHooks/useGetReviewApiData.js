import { useState, useEffect } from 'react';

const useGetReviewApiData = (page) => {
    const [reviewData, setReviewData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aggregateData, setAggregateData] = useState({});

    const getReviewData = async () => {
        const response = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie/reviews?page=${page}`)
        const data = await response.json()
        let reviewAllData = [...reviewData, ...data?.data]
        setReviewData(reviewAllData)
        setAggregateData(data?.aggregate)
    }

    useEffect(() => {
        getReviewData()
      }, [page])

    return { reviewData, aggregateData};
};

export default useGetReviewApiData;