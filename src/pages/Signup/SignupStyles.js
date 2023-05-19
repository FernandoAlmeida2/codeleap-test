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
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 3.14vw;
    }
  }
`;

export const SignupBox = styled.div`
  width: 500px;
  height: 205px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 16px;
  @media (max-width: 700px) {
    width: 70vw;
    height: 29.3vw;
    padding: 3.4vw;
    gap: 2.3vw;
    border-radius: 2.3vw;
  }
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
  @media (max-width: 700px) {
    p {
      font-size: 2.3vw;
      margin: 1.14vw 0;
    }
    input {
      width: 64.6vw;
      height: 4.57vw;
      border-radius: 1.15vw;
      padding-left: 1.6vw;
      ::placeholder {
        font-size: 2vw;
      }
    }
  }
`;

export const ButtonStyle = styled.div`
  width: 452px;
  height: 32px;
  display: flex;
  justify-content: end;
  button {
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
  @media (max-width: 700px) {
    width: 64.6vw;
    button {
      border-radius: 2.3vw;
      width: 15.9vw;
      height: 4.57vw;
      font-size: 2.3vw;
    }
  }
`;
