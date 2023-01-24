import { Container, ImgLogo } from "./Header.styled";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <Container>
      <ImgLogo src={Logo} alt="" />
    </Container>
  );
};

export default Header;
