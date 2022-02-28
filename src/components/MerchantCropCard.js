import { Link } from "react-router-dom";

function MerchantCropCard({ data }) {
  let min = Math.ceil(4);
  let max = Math.floor(5);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  function getStars() {
    let stars = "";
    for (let i = 1; i <= random; i++) {
      stars += "⭐";
    }
    return stars;
  }
  return (
    <div className="crop-card">
      <div className="center-image">
        <img
          style={{ width: "200px", borderRadius: "unset" }}
          src={data.imgURL}
          alt=""
        />
      </div>
      <p>
        <span>Farmer Name: </span> {data.farmer_name}
      </p>
      <p>
        <span>Contact: </span> {data.mobile}
      </p>
      <p>
        <span>Crop Name:</span> {data.name}
      </p>
      <p>
        <span>District:</span> {data.district}
      </p>
      <p>
        <span>Quantity:</span> {data.quantity} Kgs
      </p>
      <p>
        <span>
          Harvested/
          <br />
          Harvesting Date:
        </span>
        {data.hDate}
      </p>
      <p>
        <span>Price:</span> Rs.{data.price}
      </p>
      <p>
        <span>Description:</span> {data.description}
      </p>
      <p>
        <span>Rating: {getStars()}</span>
      </p>
      <div className="button-container">
        <Link to={`/buy-now/${data.email}`} className="primary-btn">
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export default MerchantCropCard;
