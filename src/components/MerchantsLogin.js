import { useState } from "react";
import supabase from "../config/client";
import { useHistory } from "react-router-dom";

function MerchantsLogin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");
    setLoading(true);
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    setLoading(false);
    console.log(user, session);

    if (error) {
      setError(error);
    } else {
      history.push("/dashboard");
    }
  }
  return (
    <>
      <h1>Merchant's Login</h1>

      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Email Address"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className="button-container">
        <div onClick={handleSubmit} className="primary-btn">
          Submit
        </div>
      </div>
    </>
  );
}

export default MerchantsLogin;
