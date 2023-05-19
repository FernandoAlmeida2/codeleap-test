import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const PostBox = styled.div`
  width: 752px;
  height: 316px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding-bottom: 24px;
  @media (max-width: 700px) {
    width: 87.5vw;
    height: 36.8vw;
    border-radius: 2.3vw;
    padding-bottom: 3.43vw;
  }
`;

export const TitleDiv = styled.div`
  width: 752px;
  height: 70px;
  background-color: ${COLORS.blue};
  border-radius: 16px 16px 0px 0px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  position: relative;

  h1 {
    font-weight: 700;
    font-size: 22px;
    color: #ffffff;
  }
  @media (max-width: 700px) {
    width: 87.5vw;
    height: 8.14vw;
    border-radius: 2vw 2vw 0px 0px;
    padding-left: 3.43vw;
    h1 {
      font-size: 3vw;
    }
  }
`;

export const IconsDiv = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  gap: 32px;
  @media (max-width: 700px) {
    right: 3vw;
    top: 3vw;
    gap: 3vw;
  }
`;

export const PostInfo = styled.div`
  width: 100%;
  height: 58px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #777777;
  h2 {
    font-weight: 700;
  }
  h3 {
    font-weight: 400;
  }
  @media (max-width: 700px) {
    height: 8.3vw;
    padding: 0 3vw;
    font-size: 2.5vw;
  }
`;

export const PostContent = styled.p`
  width: 100%;
  height: 164px;
  padding: 0 24px;
  font-size: 18px;
  overflow-y: auto;
  @media (max-width: 700px) {
    height: 20vw;
    padding: 0 3vw;
    font-size: 2.5vw;
  }
`;
