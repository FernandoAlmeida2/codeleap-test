import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CreatePostForm from "../../components/posts/CreatePostForm/CreatePostForm";
import Post from "../../components/posts/Post/Post";
import SearchingPosts from "../../components/posts/SearchingPosts";
import { getPosts } from "../../services/postApi";
import { Container, MainStyle } from "./MainScreenStyles";

export default function MainScreen() {
  const [posts, setPosts] = useState(null);
  const [switchRefreshPosts, setRefreshPosts] = useState(false);

  function refreshPosts() {
    setRefreshPosts(!switchRefreshPosts);
  }

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [switchRefreshPosts]);
  return (
    <Container>
      <MainStyle>
        <Header />
        <CreatePostForm refreshPosts={refreshPosts} />
        {posts ? (
          <>
            {posts.results.map((post) => (
              <Post key={post.id} post={post} refreshPosts={refreshPosts} />
            ))}
          </>
        ) : (
          <SearchingPosts />
        )}
      </MainStyle>
    </Container>
  );
}
