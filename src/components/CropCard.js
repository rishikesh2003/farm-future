function CropCard({ data, mobile }) {
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
        <span>Contact: </span> {mobile}
      </p>
    </div>
  );
}

export default CropCard;
