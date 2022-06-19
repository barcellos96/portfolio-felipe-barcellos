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
            “Psicólogo de formação, entusiasta de tecnologia e apaixonado por
            aprender, acredito que devemos aproveitar para aprender cada vez
            mais sempre que pudermos. Dito isto, estou ingressando na carreira
            de tecnologia afim de adquirir mais conhecimentos e experiências e
            encontrar soluções para os problemas”
          </p>
        </section>
      </SectionAbout>
    </Container>
  );
};

export default About;
