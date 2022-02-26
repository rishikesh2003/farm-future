import supabase from "../config/client";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function FarmersSignup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");

    setLoading(true);
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      {
        data: {
          name: name,
          role: "farmer",
        },
      }
    );

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
      <h1>Farmer's Sign Up</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Name"
      />
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
        <div
          onClick={() => {
            handleSubmit();
          }}
          className="primary-btn"
        >
          Submit
        </div>
      </div>
    </div>
  );
}

export default FarmersSignup;
