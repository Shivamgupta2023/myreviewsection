export const calculateStarRating = (rating) => {

    let totalRating = 5
    let Stars = []
    for (let i=0; i<totalRating; i++) {
        Stars.push(0)
    }
    for (let i=0; i<rating; i++) {
        Stars[i] = 1
    }
    return Stars;
};