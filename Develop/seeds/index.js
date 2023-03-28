const artistSeeds = require('./artist-seeds');
const reviewSeeds = require('./review-seeds');
const songSeeds = require('./song-seeds');
const userSeeds = require('./user-seeds');
const voteSeeds = require('./vote-seeds');

const sequelize = require('../config/connection');

const planter = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await artistSeed();
  console.log('\n----- SOCIETIES UNWANTED -----\n');

  await reviewSeed();
  console.log('\n----- OPINIONS! -----\n');

  await songSeed();
  console.log('\n----- TRA-LA-LA -----\n');

  await userSeed();
  console.log('\n----- THE PEOPLES HAVE LANDED -----\n');

  await voteSeed();
  console.log('\n----- DEMOCRACY!! -----\n');

  process.exit(0);
};

planter();