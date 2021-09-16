import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Laptop = new Schema(
  {
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    processor: { type: String, required: true },
    memory: { type: String, required: true },
    hardrive: { type: String, required: true },
    // buy_link: { type: String, required: true },
    userId: {type: Schema.Types.ObjectId, ref: 'users'},
    reviews: [
      {
        author: { type: String, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  // { timestamps: true }
  { timestamps: true, toJSON: { virtuals: true } }
)

Laptop.virtual('rating').get(function () {
  return (
    this.reviews.reduce((total, review) => total + review.rating, 0) /
    this.reviews.length
  )
})

export default mongoose.model('laptops', Laptop)