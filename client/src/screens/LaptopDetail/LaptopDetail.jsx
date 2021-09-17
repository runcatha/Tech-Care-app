import { useState, useEffect } from "react";
import "./LaptopDetail.css";
import { Layout, ReviewForm, Reviews } from "../../components";
import { getLaptop, deleteLaptop, updateLaptop } from "../../services/laptops";
import { useParams, Link, Redirect } from "react-router-dom";
import StarRating from 'star-rating-react'
import { useHistory } from 'react-router-dom'
import axios from "axios";



const LaptopDetail = (props) => {
  // const [laptop, setLaptop] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isUpdated, setUpdated] = useState(false)
  const { id } = useParams()
  const history = useHistory()
  const [toggleFetch, setToggleFetch] = useState(false)
  const [laptop, setLaptop] = useState({
    image_url: '',
    name: '',
    price: '',
    description: '',
    buy_link: '',
    reviews: [],
  })
  const [review, setReview] = useState({
    author: '',
    rating: '',
    description: '',
  })


  const { handleRedirect, user } = props

  useEffect(() => {
    const fetchLaptop = async () => {
      const laptop = await getLaptop(id);
      console.log(laptop)
      setLaptop(laptop);
      setLoaded(true);
    };
    fetchLaptop();
  }, [id, toggleFetch]);

  const handleChange = (event) => {
    const { name, value } = event.target
    setReview({
      ...review,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    if (user !== null) {
      event.preventDefault()
      laptop.reviews.push(review)
      setLaptop(laptop)
      await updateLaptop(id, laptop)
      setToggleFetch((toggleFetch) => !toggleFetch)
      setReview({
        author: '',
        rating: '',
        description: '',
      })
      history.push('/laptops/:id')
    } else {
      alert('Please sign in first')
      history.push('/sign-in')
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    await deleteLaptop(id, laptop)
    setUpdated(true)
  }
  if (isUpdated) {
    return <Redirect to={'/laptops'} />
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (

    <Layout user={user}>

      <div className="laptop-detail">
        <div className="detail">
          <h1>Description</h1>
          <div className="description">{laptop.description}</div>
          <h1>Specifications</h1>
          <h2>Processor: {laptop.processor}</h2>
          <h2>Hard Drive: {laptop.hardrive}</h2>
          <h2>Memory: {laptop.memory}</h2>
          <div className='directLinkbutton'>
            <a className='linkbutton' href={laptop.buy_link}>Click to Buy</a>
          </div>
        </div>
        <div className="secondhalf">
          <img
            className="laptop-detail-image"
            src={laptop.image_url}
            alt={laptop.name}
          />
          <div className='detail'>
            <div className='name'>{laptop.name}</div>
            <div className='rating'>
              <StarRating
                size={laptop.rating}
                value={laptop.rating}
                onChange={function (val) {
                  // console.log(val)
                }}
              />
            </div>
            <h2 className="price">Price: {`$${laptop.price}`}</h2>
            <div className="button-container">
              <Link className="edit-button" to={`/laptops/${laptop._id}/edit`}>
                <button className="editbutton">Edit</button>
              </Link>

              <div >
                <Link to='/laptops' id="deleteButton">
                  <button
                    className="delete-button"
                    onClick={() => deleteLaptop(laptop._id)}
                  >
                    Delete
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className='reviews-wrapper'>
        <ReviewForm
          author={review.author}
          rating={review.rating}
          description={review.description}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <Reviews reviews={laptop.reviews} />

        </div>
       
    </Layout>

  );
};

export default LaptopDetail;
