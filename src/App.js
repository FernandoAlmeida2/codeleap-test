import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ResetStyle from "./assets/styles/Reset";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const { username } = useSelector((state) => state.user);
  return (
    <>
      <ResetStyle />
      <BrowserRouter>
        {username ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </>
  );
}

export default App;
