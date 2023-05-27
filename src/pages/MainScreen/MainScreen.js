import { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import CreatePostForm from "../../components/posts/CreatePostForm/CreatePostForm";
import Post from "../../components/posts/Post/Post";
import SearchingPosts from "../../components/posts/SearchingPosts";
import { getPosts } from "../../services/postApi";
import { Container, LoadMoreStyle, MainStyle } from "./MainScreenStyles";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MainScreen() {
  const [posts, setPosts] = useState(null);
  const [switchRefreshPosts, setRefreshPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTopView, setCurrentTopView] = useState(0);
  const [loadMorePosts, setLoadMorePosts] = useState(false);

  const viewRef = useRef();

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
      setCurrentTopView(posts.results[posts.results.length - 1].id);
      setPosts({ ...response, results: [...posts.results, ...newPosts] });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setLoadMorePosts(false);
    }
  }

  useEffect(
    () => viewRef.current.scrollIntoView(),
    [currentTopView]
  );

  useEffect(() => {
    setIsLoading(true);
    getPosts("")
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [switchRefreshPosts]);
  return (
    <Container>
      <MainStyle>
        <Header viewRef={viewRef} isRefView={currentTopView === 0} />
        <CreatePostForm refreshPosts={refreshPosts} />
        {!isLoading && posts ? (
          <InfiniteScroll
            dataLength={posts.results.length}
            next={() => fetchData(posts.next)}
            hasMore={posts.next && loadMorePosts} // Replace with a condition based on your data source
            loader={<SearchingPosts />}
            scrollThreshold={0}
            endMessage={!posts.next && <p>No more data to load.</p>}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {posts.results.map((post) => (
              <Post
                key={post.id}
                post={post}
                refreshPosts={refreshPosts}
                viewRef={viewRef}
                isRefView={currentTopView === post.id}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <SearchingPosts />
        )}
        {!isLoading && (
          <LoadMoreStyle
            onClick={() => {
              setLoadMorePosts(true);
              viewRef.current.scrollIntoView();
            }}
          >
            Load more posts
          </LoadMoreStyle>
        )}
      </MainStyle>
    </Container>
  );
}
