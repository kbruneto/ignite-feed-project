import { Header } from "./components/header/header";
import { Post } from "./components/Post/Post";
import { Profile } from "./components/profile/profile";
import GlobalStyles from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Post />
      <Profile />
      <GlobalStyles />
    </>
  );
}
