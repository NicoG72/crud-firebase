import { useState } from "react";
import { useContextUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContextUser();
  const [userAcount, setUserAccount] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserAccount({ ...userAcount, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(userAcount.email, userAcount.password);
    } catch (error) {
      console.log(error.code);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>Form Login</h1>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>User Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type your email account"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>User Email</label>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
