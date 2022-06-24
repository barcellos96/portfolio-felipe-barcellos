import { Container, Button, HeaderContainer, Title, ArrowDown } from "./style";

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

      <Title>
        <h1>Felipe Barcellos</h1>
        <h2>Desenvolvedor Front-End</h2>

        <ArrowDown
          onClick={(e) =>
            console.log(
              e.pageY < 750 ? window.scroll(0, 650) : window.scroll(0, 980)
            )
          }
        ></ArrowDown>
      </Title>
    </Container>
  );
};

export default Header;
