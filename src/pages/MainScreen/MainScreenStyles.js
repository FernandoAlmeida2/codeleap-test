import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: center;
`;

export const MainStyle = styled.div`
  width: 800px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (max-width: 700px) {
    width: 114.3vw;
    gap: 3.4vw;
  }
`;

export const LoadMoreStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #5FB7F2;
  border: 1px solid #d9dce2;
  :hover{
    background-color: #F7F7F7;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    height: 5.8vw;
  }
`