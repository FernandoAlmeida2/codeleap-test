import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ResetStyle from "./assets/styles/Reset";
import MainScreen from "./pages/MainScreen/MainScreen";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <ResetStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/feed" element={<MainScreen />} />

        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
