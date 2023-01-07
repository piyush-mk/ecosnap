const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const domPurifier = require('dompurify');
const { JSDOM } = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

const stripHtml = require('string-strip-html');

//initialize slug
mongoose.plugin(slug);
const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  points: {
    type: String,
    required: true,
  },
});



module.exports = mongoose.model('City', citySchema);
