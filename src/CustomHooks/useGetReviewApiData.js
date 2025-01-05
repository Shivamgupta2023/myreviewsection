import { useState, useEffect } from 'react';

const useGetReviewApiData = (page, rating, showMoreClicked) => {
    const [reviewData, setReviewData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aggregateData, setAggregateData] = useState({});

    const getReviewData = async () => {
        let mainUrl = 'https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie/reviews?' + '&page=' + page + (rating ? '&rating=' + rating : '')
        const response = await fetch(mainUrl)
        const data = await response.json()
        let reviewAllData = [...reviewData, ...data?.data]
        let newReviewData = data?.data
        setReviewData(showMoreClicked ? reviewAllData : newReviewData)
        setAggregateData(data?.aggregate)
    }

    useEffect(() => {
        getReviewData()
      }, [page, rating])

    return { reviewData, aggregateData};
};

export default useGetReviewApiData;