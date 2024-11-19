import { Post } from "./components/Post/Post";
import { comments } from "./components/Post/comentsData";
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
          <Post name="Janaina" />
          <Post name="Gabriel" comments={comments} />
        </ContainerPosts>
      </ProfilePostContainer>
      <GlobalStyles />
    </>
  );
}
