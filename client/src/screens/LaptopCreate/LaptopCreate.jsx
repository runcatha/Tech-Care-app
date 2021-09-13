import { useState } from 'react'
import './LaptopCreate.css'
import { Layout } from '../../components'
import { Redirect } from 'react-router-dom'
import { createLaptop } from '../../services/laptops'

const ProductCreate = (props) => {
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
      <form className='create-form' onSubmit={handleSubmit}>
      <input
          className='input-image-link'
          placeholder='Image'
          value={laptop.image_url}
          name='image_url'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-name'
          placeholder='Name'
          value={laptop.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-price'
          placeholder='Price'
          value={laptop.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-description'
          rows={10}
          placeholder='Description'
          value={laptop.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className='input-processor'
          placeholder='Processor'
          value={laptop.processor}
          name='processor'
          required
          onChange={handleChange}
        />
        <input
          className='input-memory'
          placeholder='Memory'
          value={laptop.memory}
          name='memory'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-hardrive'
          placeholder='Hardrive'
          value={laptop.hardrive}
          name='hardrive'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-buy-link'
          placeholder='Buylink'
          value={laptop.buy_link}
          name='buylink'
          required
          autoFocus
          onChange={handleChange}
        />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default LaptopCreate