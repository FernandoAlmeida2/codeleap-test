import { useDispatch } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { logout } from "../redux/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  function makeLogout() {
    localStorage.setItem("username", "");
    dispatch(logout());
  }
  return (
    <HeaderStyle>
      <h1>CodeLeap Network</h1>
      <p onClick={makeLogout}>Logout</p>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: ${COLORS.blue};
  padding: 0 37px;
  border: 1px solid #999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  h1 {
    font-size: 22px;
  }
  p {
    cursor: pointer;
    font-size: 16px;
  }
  @media (max-width: 700px) {
    min-height: 11.4vw;
    padding: 0 10vw;
    h1 {
      font-size: 4.5vw;
    }
    p {
      font-size: 3vw;
    }
  }
`;
