import mongoose from "mongoose";

const { Schema } = mongoose;

const jokeSchema = new Schema(
  {
    joke: { type: String, required: true },
  },
  {
    collection: "jokes",
  }
);

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;
