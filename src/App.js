import { Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import NaviBar from "./components/common/NaviBar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./components/forms/Register";

function App() {
  return (
    <>
      <NaviBar />
      <h1>App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
          exact
        />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </>
  );
}

export default App;
