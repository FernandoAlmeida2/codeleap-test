import { IconsDiv, PostBox, PostContent, PostInfo, TitleDiv } from "./Styles";
import { TbTrashXFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import DeleteModal from "../../DeleteModal";
import { getTimePost } from "./utils";
import { useState } from "react";
import UpdateModal from "../../UpdateModal";

export default function Post({ post, refreshPosts, viewRef, isRefView }) {
  const { username, created_datetime, title, content } = post;
  const { username: userLogged } = useSelector((state) => state.user);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  const time_post = getTimePost(created_datetime);

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          postId={post.id}
          refreshPosts={refreshPosts}
        />
      )}
      {showUpdateModal && (
        <UpdateModal
          setUpdateModal={setUpdateModal}
          post={post}
          refreshPosts={refreshPosts}
        />
      )}
      <PostBox ref={isRefView ? viewRef : null}>
        <TitleDiv>
          <h1>{title}</h1>
          {username === userLogged && (
            <IconsDiv>
              <TbTrashXFilled
                color="white"
                cursor={"pointer"}
                size={"2vw"}
                onClick={() => setDeleteModal(true)}
              />
              <FiEdit
                color="white"
                cursor={"pointer"}
                size={"2vw"}
                onClick={() => setUpdateModal(true)}
              />
            </IconsDiv>
          )}
        </TitleDiv>
        <PostInfo>
          <h2>@{username}</h2>
          <h3>{time_post}</h3>
        </PostInfo>
        <PostContent>{content}</PostContent>
      </PostBox>
    </>
  );
}
