import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

function MerchantInstructions() {
  return (
    <>
      <Helmet>
        <title>Instructions for Merchants</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="instructions">
        <h1>Instructions For Merchants</h1>
        <ol>
          <li>
            Before harvest, the Government of India announces the minimum
            support prices(MSP) for procurement based on the recommendation from
            the Commission of Agricultural Costs and Prices (CACP), and
            merchants must strictly adhere to it.
          </li>
          <li>
            The merchants are also not advised to bargain with farmers stating
            the prices of other farmers below the MSP as it is the farmer's
            choice.
          </li>
          <li>
            The merchants are advised to buy directly from the farmers and avoid
            intermediate brokers and third-party persons as it increases the
            profit for both the farmers and the merchants.
          </li>
          <li>
            The merchants can request the farmers for the mode of shipment but
            must arrange their own methods if the farmer cannot provide one.
          </li>
        </ol>
        <p>
          Note: If any of the merchants have been found or reported by the
          farmer for violating these rules we have the right to ban you from our
          platform and to take legal action.
        </p>
      </div>
    </>
  );
}

export default MerchantInstructions;
