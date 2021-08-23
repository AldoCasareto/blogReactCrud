const router = require('express').Router();
const Ratings = require('../models/Ratings');
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const newRating = new Ratings(req.body);
  try {
    const savedReview = await newRating.save();
    console.log(savedReview);
    const updatedPost = await Post.findById(savedReview.id);
    updatedPost.ratings.push(savedReview);
    updatedPost.save();
    res.status(200).json(savedReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const ratings = await Ratings.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
