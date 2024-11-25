import { Post } from "./components/Post/Post";
import { postArray } from "./components/Post/postsData";
import { Profile } from "./components/Profile/Profile";
import { ProfilePostContainer } from "./components/ProfilePostContainer";
import { Header } from "./components/header/header";
import GlobalStyles, { ContainerPosts } from "./styles/global";

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
