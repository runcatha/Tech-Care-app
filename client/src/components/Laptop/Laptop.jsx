import './Laptop.css';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

function Laptop(props) {

  console.log(props)
          
  return (
    <>
      {/* <Link className="laptop" to={`/laptops/${props._id}`}>
        <img className="laptop-image" src={props.image_url} alt={props.name} />
        <div className="laptop-name">{props.name}</div>
        <div className="laptop-price">{`$${props.price}`}</div>
      </Link>
    </>
  )
} */}

          
      <div className='laptops-div' >
        {/* style={{ width: '18rem' }} */}
        <Card className='card-container' >
          <Card.Img className='card-img' variant="top" src={props.image_url} />
          <Card.Body>
            <Card.Title className='card-name'>{props.name}</Card.Title>
            <Card.Text className='card-price'>
              ${props.price}
            </Card.Text>
    
          </Card.Body>
        </Card>
      </div>
    </>
      
     
  )
}
    

  export default Laptop;