import Navbar from "../components/Navbar";
import supabase from "../config/client";

function Dashboard() {
  const user = supabase.auth.user();
  console.log(user);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>Dashboard</h1>
        <p>Name: {user.user_metadata.name}</p>
        <p>Role: {user.user_metadata.role}</p>
      </div>
    </>
  );
}

export default Dashboard;
