import { useState } from "react";
import supabase from "../config/client";
import { useHistory } from "react-router-dom";

function FarmersLogin() {
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
    <div className={"flex-column"}>
      <h1>Farmer's Login</h1>
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
      {loading && (
        <div className="loading-container">
          <div className="loader"></div>
        </div>
      )}
      {error && <p className="error">{error.message}</p>}
      <div className="button-container">
        <div onClick={handleSubmit} className="primary-btn">
          Submit
        </div>
      </div>
    </div>
  );
}

export default FarmersLogin;
