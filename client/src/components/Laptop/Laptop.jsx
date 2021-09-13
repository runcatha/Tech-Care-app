import './Laptop.css';
import { Link } from 'react-router-dom'

const Laptop = (props) => {
    return (
        <>
            <Link className="laptop" to={`/laptops/${props._id}`}>
                <img className="laptop-image" src={props.imgURL} alt={props.name} />
                <div className="laptop-name">{props.name}</div>
                <div className="price">{`$${props.price}`}</div>
            </Link>
        </>
    )
}
export default Laptop