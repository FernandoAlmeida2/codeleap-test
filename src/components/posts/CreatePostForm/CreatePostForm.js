import { useState } from "react";
import { ButtonStyle, ContentStyle, CreatePostBox, InputStyle } from "./Styles";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
        <button disabled={title === "" || content === ""}>Create</button>
      </ButtonStyle>
    </CreatePostBox>
  );
}
