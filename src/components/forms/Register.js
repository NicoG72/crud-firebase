import { useState } from "react";
import { useContextUser } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

function Register() {
  const { registerUser } = useContextUser();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(newUser.email, newUser.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div>
      <h1>Form Register user</h1>
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
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
