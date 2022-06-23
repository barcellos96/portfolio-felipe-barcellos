import { Container, Img, SectionAbout } from "./style";

const About = () => {
  return (
    <Container id="about">
      <Img></Img>
      <SectionAbout>
        <h4 className="title">SOBRE MIM</h4>

        <section>
          <h2 className="name">Felipe Barcellos</h2>
          <p className="about-me">
            “Entusiasta de tecnologia e apaixonado por aprender, acredito que
            devemos aprender cada vez mais. Ingressando na carreira de
            tecnologia afim de adquirir mais conhecimentos e experiências Na
            área da tecnologia, estou com o JavaScript a 1 ano e tenho mais de
            1.000 horas de curso intensivo para Front-End. No momento estou
            ingressando na área de Back-end com Express, Node.js e PostgreSQL. ”
          </p>
        </section>
      </SectionAbout>
    </Container>
  );
};

export default About;
