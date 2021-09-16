import { useState } from 'react'
import './LaptopCreate.css'
import { Layout } from '../../components'
import { Redirect } from 'react-router-dom'
import { createLaptop } from '../../services/laptops'

const LaptopCreate = (props) => {
  const [laptop, setLaptop] = useState({
    image_url: '',
    name: '',
    price: '',
    description: '',
    processor: '',
    memory: '',
    hardrive: '',
    buy_link: ''
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setLaptop({
      ...laptop,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createLaptop(laptop)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/laptops`} />
  }
  return (
    <Layout user={props.user}>
      <div className='create-form-content-container'>
        <div className='create-laptop-image-container'>
          <img src='https://i.imgur.com/PenAzS5.jpg'
            // className='create-laptop-pic'
            id='create-laptop'
            alt='create-laptop' />
          <div className='create-laptop-padding'></div>
        </div>
        <form className='create-form' onSubmit={handleSubmit}>
          <div className='create-input-container'>
            <input
              className='add-input-image-link'
              placeholder='Image'
              value={laptop.image_url}
              name='image_url'
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className='add-input-name'
              placeholder='Name'
              value={laptop.name}
              name='name'
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className='add-input-price'
              placeholder='Price'
              value={laptop.price}
              name='price'
              required
              onChange={handleChange}
            />
            <input
              className='add-input-description'
              placeholder='Description'
              value={laptop.description}
              name='description'
              required
              onChange={handleChange}
            />
            <input
              className='add-input-processor'
              placeholder='Processor'
              value={laptop.processor}
              name='processor'
              required
              onChange={handleChange}
            />
            <input
              className='add-input-memory'
              placeholder='Memory'
              value={laptop.memory}
              name='memory'
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className='add-input-hardrive'
              placeholder='Hardrive'
              value={laptop.hardrive}
              name='hardrive'
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className='add-input-buy-link'
              placeholder='Buylink'
              value={laptop.buy_link}
              name='buy_link'
              required
              autoFocus
              onChange={handleChange}
              type="url"
            />
          </div>
          <div className='create-form-button-div'>
            <button type='submit' className='create-form-submit-button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LaptopCreate