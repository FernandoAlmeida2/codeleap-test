import { Navigate, Route, Routes } from "react-router-dom";
import MainScreen from "../pages/MainScreen/MainScreen";
import Signup from "../pages/Signup/Signup";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/feed" element={<MainScreen />} />

      <Route path="*" element={<Navigate to="/feed" />} />
    </Routes>
  );
}
