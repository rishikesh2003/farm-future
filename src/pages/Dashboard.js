import FarmerDash from "../components/Dashboard/FarmerDash";
import MerchantDash from "../components/Dashboard/MerchantDash";
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
      {user.user_metadata.role === "farmer" ? <FarmerDash /> : <MerchantDash />}
    </>
  );
}

export default Dashboard;
