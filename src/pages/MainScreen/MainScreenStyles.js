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
`;
