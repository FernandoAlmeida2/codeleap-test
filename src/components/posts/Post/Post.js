import dayjs from "dayjs";
import { PostBox, PostContent, PostInfo, TitleDiv } from "./Styles";

export default function Post({ post }) {
  const { username, created_datetime, title, content } = post;

  const time_post = getTimePost(created_datetime);

  return (
    <PostBox>
      <TitleDiv>
        <h1>{title}</h1>
      </TitleDiv>
      <PostInfo>
        <h2>@{username}</h2>
        <h3>{time_post}</h3>
      </PostInfo>
      <PostContent>{content}</PostContent>
    </PostBox>
  );
}

function getTimePost(datetime) {
  const timeDiff = dayjs().diff(datetime, "second");
  if (timeDiff < 60) {
    return `${timeDiff} seconds ago`;
  }
  if (timeDiff < 120) {
    return `${Math.round(timeDiff / 60)} minute ago`;
  }
  if (timeDiff < 3600) {
    return `${Math.round(timeDiff / 60)} minutes ago`;
  }
  if (timeDiff < 7200) {
    return `${Math.round(timeDiff / 60)} hour ago`;
  }
  if (timeDiff < 86400) {
    return `${Math.round(timeDiff / 60)} hours ago`;
  }
  return dayjs(datetime).format("MM/DD/YYYY");
}
