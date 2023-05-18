import { IconsDiv, PostBox, PostContent, PostInfo, TitleDiv } from "./Styles";
import { TbTrashXFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import DeleteModal from "../../DeleteModal";
import { getTimePost } from "./utils";
import { useState } from "react";

export default function Post({ post, refreshPosts }) {
  const { username, created_datetime, title, content } = post;
  const { username: userLogged } = useSelector((state) => state.user);
  const [showDeleteModal, setDeleteModal] = useState(false);

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
      <PostBox>
        <TitleDiv>
          <h1>{title}</h1>
          {username === userLogged && (
            <IconsDiv>
              <TbTrashXFilled
                color="white"
                cursor={"pointer"}
                size={23}
                onClick={() => setDeleteModal(true)}
              />
              <FiEdit color="white" cursor={"pointer"} size={23} />
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
