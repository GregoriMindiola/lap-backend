import mongoose from "mongoose";

const Schema = mongoose.Schema;

const place = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    lat: { type: Number },
    lng: { type: Number },
  },
  review: {
    rating: { type: Number },
    comment: { type: String },
  },
});

export default mongoose.model("place", place);
