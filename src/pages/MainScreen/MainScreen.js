import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CreatePostForm from "../../components/posts/CreatePostForm/CreatePostForm";
import Post from "../../components/posts/Post/Post";
import SearchingPosts from "../../components/posts/SearchingPosts";
import { getPosts } from "../../services/postApi";
import { Container, MainStyle } from "./MainScreenStyles";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MainScreen() {
  const [posts, setPosts] = useState(null);
  const [switchRefreshPosts, setRefreshPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function refreshPosts() {
    setRefreshPosts(!switchRefreshPosts);
  }

  async function fetchData(url) {
    try {
      setIsLoading(true);
      const response = await getPosts(url.split("careers/")[1]);
      const newPosts = response.results.filter(
        (newPost) =>
          posts.results.filter((post) => post.id === newPost.id).length === 0
      );
      setPosts({ ...response, results: [...posts.results, ...newPosts] });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getPosts("")
      .then((response) => {
        setPosts(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [switchRefreshPosts]);
  return (
    <Container>
      <MainStyle>
        <Header />
        <CreatePostForm refreshPosts={refreshPosts} />
        {!isLoading && posts ? (
          <InfiniteScroll
            dataLength={posts.results.length}
            next={() => fetchData(posts.next)}
            hasMore={posts.next !== null} // Replace with a condition based on your data source
            loader={<SearchingPosts />}
            endMessage={<p>No more data to load.</p>}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {posts.results.map((post) => (
              <Post key={post.id} post={post} refreshPosts={refreshPosts} />
            ))}
          </InfiniteScroll>
        ) : (
          <SearchingPosts />
        )}
      </MainStyle>
    </Container>
  );
}
