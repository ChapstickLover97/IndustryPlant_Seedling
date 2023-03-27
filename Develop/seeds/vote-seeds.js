const {Vote} = require('../models');

const voteData = [{
    id: 131,
    user_id: 101,
    review_id: 1
},
{
    id: 132,
    user_id: 102,
    review_id: 2
},
{
    id: 133,
    user_id: 103,
    review_id: 3
}];

const voteSeeds = () => Vote.bulkcreate(voteData);



module.exports = voteSeeds;