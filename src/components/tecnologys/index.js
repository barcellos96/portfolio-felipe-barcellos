import { dbFront, dbBack } from "../../db";
import { Container, Content, List } from "./style";

const Tecnologys = () => {
  return (
    <Container id="tecnologys">
      <Content>
        <h1>DOMINO AS SEGUINTES TECNOLOGIAS:</h1>
        <List>
          <ul className="front-end">
            <h2>Front-End</h2>
            {dbFront.map((item, index) => (
              <li key={index}>{item.nome}</li>
            ))}
          </ul>

          <ul className="back-end">
            <h2>Back-End</h2>
            {dbBack.map((item, index) => (
              <li key={index}>{item.nome}</li>
            ))}
          </ul>
        </List>
      </Content>
    </Container>
  );
};

export default Tecnologys;
