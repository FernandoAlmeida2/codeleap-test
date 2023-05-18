import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const PostBox = styled.div`
  width: 752px;
  height: 316px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding-bottom: 24px;
`;

export const TitleDiv = styled.div`
  width: 752px;
  height: 70px;
  background-color: ${COLORS.blue};
  border-radius: 16px 16px 0px 0px;
  padding-left: 24px;
  display: flex;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
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
`;

export const PostContent = styled.p`
  width: 100%;
  height: 164px;
  padding: 0 24px;
  font-size: 18px;
  overflow-y: auto;
`;
