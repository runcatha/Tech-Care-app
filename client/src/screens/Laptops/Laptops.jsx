import { Card } from 'react-bootstrap';
import './Laptops.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


// import laptops from './seed/data.js'

import { Layout, Laptop } from '../../components'
import { getLaptops } from '../../services/laptops'
import Search from '../../components/Search/Search'
import Sort from '../../components/Sort/Sort'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'


const Laptops = (props) => {
  const [laptops, setLaptops] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchLaptops = async () => {
      const allLaptops = await getLaptops()
      setLaptops(allLaptops)
      setSearchResult(allLaptops)

    }
    fetchLaptops()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = laptops.filter((laptop) =>
      laptop.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)



    setApplySort(true)


  }

  const handleSubmit = (event) => event.preventDefault()


  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />



      <Sort onSubmit={handleSubmit} handleSort={handleSort} />


      <div className='laptops'>
        {searchResult.map((laptop, index) =>
          // <Link className="link" to="/laptops/:id">
          <Link className="link" to={`/laptops/${laptop._id}`}>
            <Laptop
              _id={laptop._id}
              name={laptop.name}
              image_url={laptop.image_url}
              price={laptop.price}
              key={index}
            />
          </Link>
        )}
      </div>
      <Link className="link" to="/add-laptop">
        <button className='add-button'>Add Laptop</button>
      </Link>

    </Layout>
  )
}






export default Laptops;