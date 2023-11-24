import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect("mongodb+srv://gregorimindiolasurmay:w5H9gZKgbPAPvZBX@cluster0.lsbtbbx.mongodb.net/?retryWrites=true&w=majority");
};
