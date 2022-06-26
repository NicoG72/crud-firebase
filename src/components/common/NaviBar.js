import { NavLink } from "react-router-dom";
import { useContextUser } from "../../context/UserProvider";

function NaviBar() {
  const { user, logOut } = useContextUser();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      {user ? (
        <>
          <NavLink to="/" exact={"true"}>
            Home
          </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login" exact={"true"}>
            Login
          </NavLink>
          <NavLink to="/register" exact={"true"}>
            Register
          </NavLink>
        </>
      )}
      <hr />
    </>
  );
}

export default NaviBar;
