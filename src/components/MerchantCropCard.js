function MerchantCropCard({ data }) {
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
      <div className="button-container">
        <div className="primary-btn">Buy Now</div>
      </div>
    </div>
  );
}

export default MerchantCropCard;
