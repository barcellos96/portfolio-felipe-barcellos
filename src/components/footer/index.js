import { Container } from "./style";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div className="copyright">
        <p>Copyright © 2022 Felipe Barcellos - Todos diretos reservados</p>
      </div>
      <div className="social-midia">
        <section className="redes">
          <AiFillLinkedin className="linkedin" />
          <AiFillGithub className="github" />
          <AiOutlineWhatsApp className="whatsapp" />
        </section>
      </div>
    </Container>
  );
};

export default Footer;
