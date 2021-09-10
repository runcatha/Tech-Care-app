import db from '../db/connection.js'
import Laptop from '../models/laptop.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const laptops =
    [
      {
        
    'image_url':"",
    'name': 'Dell XPS 15 (2020)',
    'price': '1,059.99',
    'description': `The Dell XPS 15 (2020) is in our view the best laptop for programming right now. As with previous XPS laptops, this 15-inch beauty combines a stunning design, excellent build quality and some of the most powerful mobile components you'll find in a laptop.
    It's thin and light, which not only means this looks and feels like a premium laptop for programming on, but it's also comfortable to carry around with you as well. It's high resolution 15.6-inch display is great for working on, and with high-end processors (and even graphics cards in some configurations), the Dell XPS 15 can compile code incredibly fast – making it ideal for programmers. Plus, if you go for a model with a GPU by Nvidia, you can test out your games while coding them.
    Perhaps best of all, its battery life is excellent, which means you don't have to be tethered to a desk if you want to use this powerful laptop.`,
    'processor': '10th Generation Intel® Core™ i5-',
    'memory': '8GB DDR4-2933MHz, 2x4G',
    'hardrive': '256GB M.2 PCIe NVMe Solid State Drive',
    'buy_link': 'https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9500-laptop/x[…]GjFaucVfgQUr06nphJ_ijZkI47YKDrA8taGlDRZAxdbxtoafQxtlTp3zfL1l_8'
      },
      {
        'image_url':"",
        'name': 'Apple MacBook Air (M1, 2020)',
'price': '1,249.00',
'description':  `-- Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power. ---`,
'processor': 'Apple M1 Chip',
'memory': '8 GB Ram - 3733MHz LPDDR4X',
'hardrive': '512 GB memory',
'buy_link': 'https://www.amazon.com/Apple-MacBook-13-inch-512GB-Storage/dp/B08N5M9XBS/ref=sr_1_1_[…]fYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='      }
    ]

  await Laptop.insertMany(laptops)
  console.log("Created laptops!")

  // close database connection. done.
  db.close()
}

insertData()