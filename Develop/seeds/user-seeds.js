const {User} = require('../models');

const userData = [{
    id: 101,
    username: "Crank_the_Stank3000",
    email: "3000stanks@yahoo.com",
    password: "GETCRANKED12345g?"
},
{
    id: 102,
    username: "greggggggggg",
    email: "10g@comcast.co",
    password: "pasword54321"
},
{
    id: 103,
    username: "BAHB",
    email: "wherearemykidneys@dankbush.kyle",
    password: "guest"
}];

const userSeeds = () => User.bulkcreate(userData);



module.exports = userSeeds;