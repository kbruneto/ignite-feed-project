import { Post } from "./components/Post/";
import { postArray } from "./components/Post/postsData";
import { ProfilePostContainer } from "./ProfilePostContainer";
import GlobalStyles, { ContainerPosts } from "./styles/global";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <ProfilePostContainer>
        <Profile />
        <ContainerPosts>
          {postArray?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ContainerPosts>
      </ProfilePostContainer>
      <GlobalStyles />
    </>
  );
}
