const {Artist} = require('../models');

const artistData = [{
    id: 669,
    name: 'BILMURI',
    formed_year: 2016
},
{
    id: 619,
    name: 'Phresch',
    formed_year: 2020
},
{
    id: 666,
    name: 'Atilla',
    formed_year: 2005
}
];
const artistSeeds = () => Artist.bulkcreate(artistData);



module.exports = artistSeeds;