import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CreatePostForm from "../../components/posts/CreatePostForm/CreatePostForm";
import SearchingPosts from "../../components/posts/SearchingPosts";
import { getPosts } from "../../services/postApi";
import { Container, MainStyle } from "./MainScreenStyles";

export default function MainScreen() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <MainStyle>
        <Header />
        <CreatePostForm />
        <SearchingPosts />
      </MainStyle>
    </Container>
  );
}
