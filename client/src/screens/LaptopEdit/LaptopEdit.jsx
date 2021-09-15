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
      <div className='edit-form-content-container'>
        <div className='doggo-container'>
          <img src='https://i.imgur.com/s43Gtl9.jpg'
            id='doggo-programmer'
            alt='doggo-programmer' />
          <div className='doggo-padding'></div>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <div className='edit-input-container'>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={laptop.image_url}
              name='image_url'
              required
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
              className='input-description'
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
          </div>
          <div className='edit-form-button-div'>
            <button type='submit' className='save-button'>
              Submit Edit
            </button>
          </div>
        </form>
      </div >
    </Layout >
  )
}

export default LaptopEdit
