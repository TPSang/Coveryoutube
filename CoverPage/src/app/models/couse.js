const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const CouseSchema = new Schema({
  name: String,
  description: String,
  img: String, // Update field name to 'img'
  videoID: String, // Update field name to 'video
  slug: { type: String, slug: "name", unique: true }, // Update field name to 'slug
});

module.exports = mongoose.model("couses", CouseSchema); // Use singular 'Category' as the collection name
