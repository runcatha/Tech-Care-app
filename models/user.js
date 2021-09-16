import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    password_digest: { type: String, required: true, select: false },
    laptops: [{ type: Schema.Types.ObjectId, ref: 'laptops' }]
  },
  { timestamps: true }
)
export default mongoose.model('users', User)