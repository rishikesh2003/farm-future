import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuyCrops from "./pages/BuyCrops";
import ProfitSeeds from "./pages/ProfitSeeds";
import Dashboard from "./pages/Dashboard";
import DiseaseCuring from "./pages/DiseaseCuring";
import Home from "./pages/Home";
import Labour from "./pages/Labour";
import LabourHiring from "./pages/LabourHiring";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MerchantInstructions from "./pages/MerchantInstructions";
import SellCrop from "./pages/SellCrops";
import Signup from "./pages/Signup";
import YourCrops from "./pages/YourCrops";
import Benefits from "./pages/Benefits";
import DiseasePage from "./pages/DiseasePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/logout"} component={Logout} />
        <Route path={"/labours"} component={Labour} />
        <Route path={"/labour-hiring"} component={LabourHiring} />
        <Route exact path={"/disease-curing"} component={DiseaseCuring} />
        <Route path={"/sell-crops"} component={SellCrop} />
        <Route path={"/your-crops"} component={YourCrops} />
        <Route path={"/buy-crops"} component={BuyCrops} />
        <Route path={"/instructions"} component={MerchantInstructions} />
        <Route path={"/seeds"} component={ProfitSeeds} />
        <Route path={"/benefits"} component={Benefits} />
        <Route path={"/disease-curing/:id"} component={DiseasePage} />
      </Switch>
    </Router>
  );
}

export default App;
