import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  date: String,
  author: String,
  excerpt: String,
  content: String,
  img: String,
  highlight: Boolean,
});

export const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
