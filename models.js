var mongoose = require('mongoose');
/*
mongoose.model('User', new mongoose.Schema({
  email: String,
  passwordHash: String
}));
*/

mongoose.model('User', new mongoose.Schema({
  username: String,
  passwordHash: String
}));

var ProductSchema = new mongoose.Schema({
  name: String,
  href: String,
  brand: String,
  price: String,
  img_src: String,
  category: String,
  minPrice: Number,
  maxPrice: Number
});

var Lines = mongoose.model('Lines', ProductSchema, 'lines');
var Rods = mongoose.model('Rods', ProductSchema, 'rods');
var Reels = mongoose.model('Reels', ProductSchema, 'reels');

mongoose.model('Post', new mongoose.Schema({
  uid: String,
  user: String,
  build_name: String,
  build_img: String,
  min_price: Number,
  max_price: Number,
  build: {
    rod: {
      _id: String,
      name: String,
      href: String,
      brand: String,
      price: String,
      img_src: String,
      category: String,
      minPrice: Number,
      maxPrice: Number
    },
    reel: {
      _id: String,
      name: String,
      href: String,
      brand: String,
      price: String,
      img_src: String,
      category: String,
      minPrice: Number,
      maxPrice: Number
    },
    line: {
      _id: String,
      name: String,
      href: String,
      brand: String,
      price: String,
      img_src: String,
      category: String,
      minPrice: Number,
      maxPrice: Number
    }
  }
}), 'posts');
