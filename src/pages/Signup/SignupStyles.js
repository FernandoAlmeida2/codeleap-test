import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 22px;
    font-weight: 700;
    line-height: 25.78px;
  }
`;

export const SignupBox = styled.div`
  width: 500px;
  height: 205px;
  background: #FFFFFF;
  border: 1px solid #cccccc;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 16px;
`;

export const InputStyle = styled.div`
  p {
    font-size: 16px;
    margin: 8px 0;
  }
  input {
    width: 452px;
    height: 32px;
    border: 1px solid #777777;
    padding-left: 11.2px;
    border-radius: 8px;
    ::placeholder {
      color: #cccccc;
      opacity: 1;
      font-size: 14px;
    }
  }
`;

export const ButtonStyle = styled.div`
    width: 452px;
    height: 32px;
    display: flex;
    justify-content: end;
    button{
        width: 111px;
        height: 32px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        border: none;
        background-color: ${(props) => (props.isEmpty ? "#DDDDDD" : COLORS.blue)};
        cursor: ${(props) => (props.isEmpty ? "auto" : "pointer")};
        color: ${(props) => (props.isEmpty ? "#CCCCCC" : "#FFFFFF")};
    }
`
