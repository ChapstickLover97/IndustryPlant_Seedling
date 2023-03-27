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


// HOW DOES THIS WORK???

// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();