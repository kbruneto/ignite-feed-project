import { TextHeader, HeaderBG, LogoImage } from "./styles";
import Logo from "../../assets/Ignite-simbol.svg";

export function Header() {
  return (
    <>
      <HeaderBG>
        <LogoImage src={Logo} />
        <TextHeader> Ignite Feed </TextHeader>
      </HeaderBG>
    </>
  );
}