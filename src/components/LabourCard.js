import userImg from "../images/blank-user.webp";

function LabourCard({ data }) {
  return (
    <div className="card">
      <img src={userImg} alt="user" />
      <p>
        <span>Name:</span> {data.name}
      </p>
      <p>
        <span>Mobile:</span> {data.mobile}
      </p>
      <p>
        <span>Wages / hr: </span>Rs.
        {data.wages}
      </p>
      <p>
        <span>District: </span>
        {data.district}
      </p>
      <p>
        <span>Know to operate Drone? </span>
        {data.drone}
      </p>
    </div>
  );
}

export default LabourCard;
