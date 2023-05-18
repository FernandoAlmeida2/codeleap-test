import styled from "styled-components";
import { MagnifyingGlass } from "react-loader-spinner";
import { COLORS } from "../../constants/colors";


export default function SearchingPosts() {
  return (
      <SearchingStyle>
        <MagnifyingGlass
          height="100"
          width="100"
          glassColor="#c0efff"
          color={COLORS.blue}
        />
      </SearchingStyle>
  );
}


const SearchingStyle = styled.main`
margin: 13.31vh 4.5vw;
height: 73.38vh;
display: flex;
justify-content: center;
margin-top: 30vh;
`;