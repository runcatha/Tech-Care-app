import { useState, useEffect } from "react";
import "./LaptopDetail.css";
import { Layout } from "../../components";
import { getLaptop, deleteLaptop } from "../../services/laptops";
import { useParams, Link } from "react-router-dom";

const LaptopDetail = (props) => {
  const [laptop, setLaptop] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchLaptop = async () => {
      const laptop = await getLaptop(id);
      setLaptop(laptop);
      setLoaded(true);
    };
    fetchLaptop();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="laptop-detail">
        <div className="detail">
          <div className="name">{laptop.name}</div>
          <div className="description">{laptop.description}</div>
          <h1>Specifications</h1>
          <h2>Processor: {laptop.processor}</h2>
          <h2>Hard Drive: {laptop.hardrive}</h2>
          <h2>Memory: {laptop.memory}</h2>
          <Link className="amazonlink" to={laptop.buy_link}>
            <button className="linkbutton">click to buy</button>
          </Link>
        </div>
        <div className="secondhalf">
          <img
            className="laptop-detail-image"
            src={laptop.image_url}
            alt={laptop.name}
          />
          <h2 className="price">Price: {`$${laptop.price}`}</h2>
          <div className="button-container">
            <Link className="edit-button" to={`/laptops/${laptop._id}/edit`}>
              <button className="editbutton">Edit</button>
            </Link>
            <button
              className="delete-button"
              onClick={() => deleteLaptop(laptop._id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default LaptopDetail;
