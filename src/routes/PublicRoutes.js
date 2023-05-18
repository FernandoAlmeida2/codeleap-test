import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup/Signup";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
