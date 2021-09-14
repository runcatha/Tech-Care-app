import { useState, useEffect } from 'react'
import './LaptopDetail.css'
import { Layout } from '../../components'
import { getLaptop, deleteLaptop } from '../../services/laptops'
import { useParams, Link } from 'react-router-dom'

const LaptopDetail = (props) => {
  const [laptop, setLaptop] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchLaptop = async () => {
      const laptop = await getLaptop(id)
      setLaptop(laptop)
      setLoaded(true)
    }
    fetchLaptop()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
       
      <div className='laptop-detail'>
        <img
          className='laptop-detail-image'
          src={laptop.image_url}
          alt={laptop.name}
        />
        <div className='detail'>
          <div className='name'>{laptop.name}</div>
          <div className='price'>{`$${laptop.price}`}</div>
          <div className='description'>{laptop.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/laptops/${laptop._id}/edit`}>
              <button>Edit</button>
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteLaptop(laptop._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LaptopDetail