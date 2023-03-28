const {Song} = require('../models');

const songData = [{
    id: 7,
    title: "Egg",
    length: "3:23",
    year_released: 2020,
    genre: "rock",
    artist_id: 669
},
{
    id: 8,
    title: "About That Life",
    length: "3:05",
    year_released: 2013,
    genre: "rock",
    artist_id: 666
},
{
    id: 9,
    title: "Over & Over",
    length: "3:22",
    year_released: 2023,
    genre: "rock",
    artist_id: 619
},
{
    id: 6,
    title: "Coldplay",
    length: "2:55",
    year_released: 2022,
    genre: "pop",
    artist_id: 624
},];

const songSeeds = () => Song.bulkcreate(songData);



module.exports = songSeeds;