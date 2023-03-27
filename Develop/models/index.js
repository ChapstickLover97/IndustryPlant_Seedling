const Artist = require('./Artist');
const Review = require('./Review');
const Song = require('./Song');
const User = require('./User');
const Vote = require('./Vote');

User.hasMany(Song, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Song };
