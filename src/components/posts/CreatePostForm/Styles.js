import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const CreatePostBox = styled.div`
  width: 752px;
  height: 334px;
  background-color: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 24px;
  h1 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const InputStyle = styled.input`
  width: 704px;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding-left: 10.68px;
  ::placeholder {
    color: #cccccc;
    opacity: 1;
    font-size: 14px;
  }
`;

export const ContentStyle = styled.textarea`
  width: 704px;
  height: 74px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding-left: 10.68px;
  padding-top: 7px;
  ::placeholder {
    color: #cccccc;
    opacity: 1;
    font-size: 14px;
  }
`;

export const ButtonStyle = styled.div`
  width: 704px;
  height: 32px;
  display: flex;
  justify-content: end;
  button {
    width: 120px;
    height: 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    background-color: ${(props) => (props.isEmpty ? "#DDDDDD" : COLORS.blue)};
    cursor: ${(props) => (props.isEmpty ? "auto" : "pointer")};
    color: ${(props) => (props.isEmpty ? "#CCCCCC" : "#FFFFFF")};
  }
`;
