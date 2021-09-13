import { Card } from 'react-bootstrap';
import './Laptops.css';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


// import laptops from './seed/data.js'

import { Layout, Laptop } from '../../components'
import { getLaptops } from '../../services/laptops'


const Laptops = (props) => {
  const [laptops, setLaptops] = useState([])

  useEffect(() => {
    const fetchLaptops = async () => {
      const allLaptops = await getLaptops()
      setLaptops(allLaptops)

    }
    fetchLaptops()
  }, [])


  return (
    <Layout user={props.user}>
      <div className='laptops'>
        {laptops.map((laptop, index) =>
          <Laptop
            _id={laptop._id}
            name={laptop.name}
            image_url={laptop.image_url}
            price={laptop.price}
            key={index}
          />

        )}
        <Link className="link" to="/add-laptop">
          <button>Add Laptop</button>
        </Link>
      </div>
    </Layout>
  )
}






export default Laptops;