import { Card } from 'react-bootstrap';
import './Laptops.css';
import {useState, useEffect} from 'react'

import { Layout, Laptop } from '../../components'
import { getLaptops } from '../../services/laptops'


const Laptops = (props) => {
  const [laptops, setLaptops] = useState([])

  useEffect(() => {
    const fetchLaptops = async () => {
      const allLaptops = await getLaptops()
      setLaptops(allLaptops)
      // setSearchResult(allProducts)
    }
    fetchLaptops()
  }, [])


  return (
          
    <Layout user={props.user}>
      <div className='laptops'>
        {/* {searchResult.map((product, index) => { */}
          <Laptop
            _id={laptops._id}
            name={laptops.name}
            imgURL={laptops.image_url}
            price={laptops.price}
            // key={index}
          />
        
          </div>
      </Layout>
          
   
      
      
      )
    }
         
          
         
          


export default Laptops;