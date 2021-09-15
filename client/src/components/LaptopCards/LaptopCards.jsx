// import { useState, useEffect } from 'react'
// import './LaptopCards.css'
// import LaptopCard from '../LaptopCard/LaptopCard'
// import { getLaptops } from '../../services/laptops'

// const LaptopCards = () => {
//   const [laptops, setLaptops] = useState([])

//   useEffect(() => {
//     const fetchLaptops = async () => {
//       const allLaptops = await getLaptops()
//       setLaptops(allLaptops)
//     }
//     fetchLaptops()
//   }, [])

//   const CARDS = laptops
//     .reverse()
//     .map((laptop, index) =>
//       index < 8 ? (
//         <LaptopCard
//           _id={laptop._id}
//           name={laptop.name}
//           image_url={laptop.image_url}
//           key={index}
//         />
//       ) : null
//     )

//   return (
//     <div className='laptop-cards'>
//       <div className='latest'>LATEST</div>
//       <div className='cards'>{CARDS}</div>
//     </div>
//   )
// }

// export default LaptopCards