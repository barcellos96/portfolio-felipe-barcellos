import { Container, Button, HeaderContainer } from "./style";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Button>
          <a href="#about">SOBRE</a>
        </Button>

        <Button>
          <a href="#tecnologys">TECNOLOGIAS</a>
        </Button>

        <Button>
          <a href="#works">PROJETOS</a>
        </Button>

        <Button>
          <a href="#contact">CONTATO</a>
        </Button>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
