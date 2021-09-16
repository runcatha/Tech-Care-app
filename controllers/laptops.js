import Laptop from '../models/laptop.js'

export const getLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find()
    res.json(laptops)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getLaptop = async (req, res) => {
  try {
    const { id } = req.params
    const laptop = await Laptop.findById(id).populate('userId')
    if (laptop) {
      return res.json(laptop)
    }
    res.status(404).json({ message: 'Laptop not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createLaptop = async (req, res) => {
  try {
    const laptop = new Laptop(req.body)
    await laptop.save()
    res.status(201).json(laptop)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateLaptop = async (req, res) => {
  const { id } = req.params
  const laptop = await Laptop.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(laptop)
}

export const deleteLaptop = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Laptop.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Laptop deleted')
    }
    throw new Error('Laptop not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}