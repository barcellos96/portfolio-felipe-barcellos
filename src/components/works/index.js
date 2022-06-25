import { Container, CarouselWrapper, Content } from "./style";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import { dbPortfolio } from "../../db";
import { ImGithub } from "react-icons/im";
import { FiLink } from "react-icons/fi";

const Works = () => {
  const [items] = useState(dbPortfolio);

  return (
    <Container id="works">
      <h1 className="port-h1">PROJETOS:</h1>
      <Content>
        <CarouselWrapper>
          <Carousel>
            {items.map((item, index) => (
              <div className="div-carousel" key={index}>
                <section className="display-carousel">
                  <img src={item.img} alt="" />

                  <section className="title-description">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </section>
                  <section className="links">
                    <a target="blank" href={item.link}>
                      <ImGithub className="icon-github" />
                      <p className="p-code">Código</p>
                    </a>

                    <a target="blank" href={item.project}>
                      <FiLink className="icon-link" />
                      <p className="p-web">Web Site</p>
                    </a>
                  </section>
                </section>
              </div>
            ))}
          </Carousel>
        </CarouselWrapper>
      </Content>
    </Container>
  );
};

export default Works;
