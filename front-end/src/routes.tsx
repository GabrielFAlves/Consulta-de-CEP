import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default Router;