import { useState } from "react";
import { useSelector } from "react-redux";
import { sendPost } from "../../../services/postApi";
import { ButtonStyle, ContentStyle, CreatePostBox, InputStyle } from "./Styles";

export default function CreatePostForm({ refreshPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { username } = useSelector((state) => state.user);

  async function handleClick(e) {
    const body = { username, title, content };
    await sendPost(body);
    refreshPosts();
    setTitle("");
    setContent("");
  }

  return (
    <CreatePostBox>
      <h1>What’s on your mind?</h1>
      <label>
        <p>Title</p>
        <InputStyle
          placeholder="Hello world"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        <p>Content</p>
        <ContentStyle
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <ButtonStyle isEmpty={title === "" || content === ""}>
        <button disabled={title === "" || content === ""} onClick={handleClick}>
          Create
        </button>
      </ButtonStyle>
    </CreatePostBox>
  );
}
