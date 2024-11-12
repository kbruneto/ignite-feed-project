import { Post } from "./components/Post/Post";
import { Profile } from "./components/Profile/Profile";
import { ProfilePostContainer } from "./components/ProfilePostContainer";
import { Header } from "./components/header/header";
import GlobalStyles from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <ProfilePostContainer>
        <Profile />
        <Post />
      </ProfilePostContainer>
      <GlobalStyles />
    </>
  );
}
