import { MagnifyingGlass } from "react-loader-spinner";
import { COLORS } from "../../constants/colors";

export default function SearchingPosts() {
  return (
    <MagnifyingGlass
      height="100"
      width="100"
      glassColor="#c0efff"
      color={COLORS.blue}
    />
  );
}
