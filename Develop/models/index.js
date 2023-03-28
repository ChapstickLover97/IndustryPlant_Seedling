const Artist = require('./Artist');
const Review = require('./Review');
const Song = require('./Song');
const User = require('./User');
const Vote = require('./Vote');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Artist.hasMany(Song, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE'
});

Song.belongsTo(Artist, {
  foreignKey: 'artist_id'
});

Song.hasMany(Review, {
  foreignKey: 'song_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Song, {
  foreignKey: 'song_id'
});

Review.hasMany(Vote, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(Review, {
foreignKey: 'review_id'
});


module.exports = { Artist, Review, Song, User, Vote };
