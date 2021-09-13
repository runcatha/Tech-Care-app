import { useState, useEffect } from 'react'
import './LaptopEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components'
import { getLaptop, updateLaptop } from '../../services/laptops'

const LaptopEdit = (props) => {
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

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchLaptop = async () => {
      const laptop = await getLaptop(id)
      setLaptop(laptop)
    }
    fetchLaptop()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setLaptop({
      ...laptop,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateLaptop(id, laptop)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/laptops/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div className='laptop-edit'>
        <div className='image-container'>
          <img
            className='edit-laptop-image'
            src={laptop.image_url}
            alt={laptop.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={laptop.image_url}
              name='image_url'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
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
            cols={78}
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
            onChange={handleChange}
          />
          <input
            className='input-hardrive'
            placeholder='Hardrive'
            value={laptop.hardrive}
            name='hardrive'
            required
            onChange={handleChange}
          />
          <input
            className='input-buy-link'
            placeholder='Buy-Link'
            value={laptop.buy_link}
            name='buy-link'
            required
            onChange={handleChange}
          />

          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default LaptopEdit
