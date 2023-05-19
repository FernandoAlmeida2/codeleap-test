import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { updatePost } from "../services/postApi";

export default function UpdateModal({ setUpdateModal, post, refreshPosts }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  async function handleUpdate() {
    try {
      const body = { title, content };
      await updatePost(post.id, body);
      refreshPosts();
      setUpdateModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <UpdateBox>
        <h1>Edit item</h1>
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
        <ButtonsDiv isEmpty={title === "" || content === ""}>
          <CancelButton onClick={() => setUpdateModal(false)}>
            Cancel
          </CancelButton>
          <UpdateButton
            disabled={title === "" || content === ""}
            onClick={handleUpdate}
          >
            Save
          </UpdateButton>
        </ButtonsDiv>
      </UpdateBox>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  min-height: 100%;
  width: 100%;
  background: rgba(119, 119, 119, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpdateBox = styled.div`
  width: 660px;
  height: 334px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h1 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
  @media (max-width: 700px) {
    width: 80vw;
    height: 40.5vw;
    border-radius: 2.3vw;
    padding: 3vw;
    gap: 2vw;
    h1 {
      font-size: 3vw;
    }
    p {
    font-size: 2.3vw;
    margin-bottom: 1vw;
  }
  }
`;

const InputStyle = styled.input`
  width: 612px;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding-left: 9.56px;
  ::placeholder {
    color: #cccccc;
    opacity: 1;
    font-size: 14px;
  }
  @media (max-width: 700px) {
    width: 69.5vw;
    height: 4.28vw;
    border-radius: 1.14vw;
    padding-left: 1.36vw;
    ::placeholder {
      font-size: 2vw;
    }
  }
`;

const ContentStyle = styled.textarea`
  width: 612px;
  height: 74px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding-left: 9.56px;
  padding-top: 7px;
  ::placeholder {
    color: #cccccc;
    opacity: 1;
    font-size: 14px;
  }
  @media (max-width: 700px) {
    width: 69.5vw;
    height: 9.9vw;
    border-radius: 1.14vw;
    padding-left: 1.36vw;
    padding-top: 1vw;
    ::placeholder {
      font-size: 2vw;
    }
  }
`;

const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 16px;
  button {
    width: 120px;
    height: 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
  }
  @media (max-width: 700px) {
    gap: 2.3vw;
    button {
      width: 16vw;
      height: 4.28vw;
      border-radius: 1.14vw;
      font-size: 2.3vw;
    }
  }
`;

const CancelButton = styled.button`
  background: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  background: #ff5151;
  color: #ffffff;
  border: none;
  background-color: ${(props) => (props.isEmpty ? "#DDDDDD" : COLORS.green)};
  cursor: ${(props) => (props.isEmpty ? "auto" : "pointer")};
  color: ${(props) => (props.isEmpty ? "#CCCCCC" : "#FFFFFF")};
`;
