import styled from "styled-components";
import { deletePost } from "../services/postApi";

export default function DeleteModal({ setDeleteModal, postId, refreshPosts }) {
  async function handleDelete() {
    try {
      await deletePost(postId);
      refreshPosts();
      setDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <DeleteBox>
        <h1>Are you sure you want to delete this item?</h1>
        <ButtonsDiv>
          <CancelButton onClick={() => setDeleteModal(false)}>
            Cancel
          </CancelButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </ButtonsDiv>
      </DeleteBox>
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

const DeleteBox = styled.div`
  width: 660px;
  height: 146px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  h1 {
    font-size: 22px;
    font-weight: 700;
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
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background: #ffffff;
  border: 1px solid #999999;
`;

const DeleteButton = styled.button`
  background: #ff5151;
  color: #ffffff;
  border: none;
`;
