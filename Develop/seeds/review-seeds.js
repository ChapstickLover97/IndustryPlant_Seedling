const {Review} = require('../models');

const reviewData = [{
    id: 1,
    reviewed_date: "03/27/23",
    user_id: 101,
    song_id: 9
},
{
    id: 2,
    reviewed_date: "01/01/21",
    user_id: 102,
    song_id: 8
},
{
    id: 3,
    reviewed_date: "03/03/23",
    user_id: 103,
    song_id: 7
},
{
    id: 4,
    reviewed_date: "10/03/22",
    user_id: 101,
    song_id: 6
}];

const reviewSeeds = () => Review.bulkcreate(reviewData);



module.exports = reviewSeeds;