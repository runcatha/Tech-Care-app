import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Laptop = new Schema(
  {
    // image_url: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    processor: { type: String, required: true },
    memory: { type: String, required: true },
    hardrive: { type: String, required: true },
    buy_link: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('laptops', Laptop)