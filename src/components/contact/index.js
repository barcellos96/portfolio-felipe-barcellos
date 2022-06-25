import { Container } from "./style";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <Container id="contact">
      <h1>ENTRAR EM CONTATO</h1>
      <section className="sec-contatos">
        <div className="card card-email">
          <AiTwotoneMail
            className="email"
            onClick={() => window.open("mailto:felipebarcellos11@gmail.com")}
          />
          <h3>E-MAIL</h3>
          <p
            className="p-email"
            onClick={() => window.open("mailto:felipebarcellos11@gmail.com")}
          >
            felipebarcellos11@gmail.com
          </p>
          <span>A sua disposição!</span>
        </div>

        <div className="card card-wpp">
          <IoLogoWhatsapp
            className="wpp"
            onClick={() =>
              window.open(
                "https://wa.me/5548996517170?text=Ola.%20Vi%20seu%20portfolio..."
              )
            }
          />
          <h3>WHATSAPP</h3>
          <p
            className="p-wpp"
            onClick={() =>
              window.open(
                "https://wa.me/5548996517170?text=Ola.%20Vi%20seu%20portfolio..."
              )
            }
          >
            (48)9 9651-7170
          </p>
          <span>Me chame a qualquer momento!</span>
        </div>

        <div className="card card-linkedin">
          <IoLogoLinkedin
            className="in"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/felipe-barcellos-01abab204/"
              );
            }}
          />
          <h3>LINKEDIN</h3>
          <p
            className="p-in"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/felipe-barcellos-01abab204/"
              );
            }}
          >
            /in/felipe-barcellos
          </p>
          <span>Vem ser meu amigo!</span>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
