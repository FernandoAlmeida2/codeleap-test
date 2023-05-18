import dayjs from "dayjs";
import { PostBox, PostContent, PostInfo, TitleDiv } from "./Styles";

export default function Post({ post }) {
  const { username, created_datetime, title, content } = post;

  const time_post = dayjs().diff(created_datetime, 'minute');

  return(
    <PostBox>
        <TitleDiv>
            <h1>{title}</h1>
        </TitleDiv>
        <PostInfo>
            <h2>@{username}</h2>
            <h3>{time_post} minutes ago</h3>
        </PostInfo>
        <PostContent>{content}</PostContent>
    </PostBox>
  )
}
