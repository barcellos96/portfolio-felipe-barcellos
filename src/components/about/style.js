import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 95vh;
  background-image: linear-gradient(
    to bottom,
    rgba(72, 154, 194, 0.8),
    #489ac2,
    #dfe1e0
  );
  box-shadow: 0px -1px 25px #000000;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  font-family: "Courier New", Courier, monospace;

  .title {
    font-size: 18px;
    color: #ebc678;
    margin-bottom: -15px;
  }

  .name {
    font-size: 40px;
    color: #fff;
  }

  .about-me {
    font-size: 18px;
    color: #fff;
    margin-bottom: 100px;
  }

  @media (min-width: 768px) {
    margin-left: 40px;
    width: 400px;
  }

  @media (min-width: 1440px) {
    margin-left: 50px;
    width: 500px;

    .about-me {
      font-size: 22px;
    }
  }
  @media (min-width: 1980px) {
    .title {
      font-size: 52px;
      margin-bottom: -50px;
    }

    .name {
      font-size: 80px;
      width: 800px;
    }

    .about-me {
      font-size: 52px;
      width: 1000px;
    }
  }
`;

export const Img = styled.img`
  display: flex;
  height: 200px;
  width: 200px;
  border-radius: 50%;

  background-image: url("https://pps.whatsapp.net/v/t61.24694-24/287292396_1093682341575046_8002426539060632387_n.jpg?ccb=11-4&oh=01_AVxEC20kP5sBiUPcpIXwOaflC_pOnslwg57tZAXD82SBdQ&oe=62BD7FD9");
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: center;

  box-shadow: 0px -1px 40px #000000;

  margin-top: 40px;

  @media (min-width: 1024px) {
    height: 400px;
    width: 400px;
    background-size: 400px;
    margin-left: -50px;
    margin-right: 100px;
  }

  @media (min-width: 1980px) {
    height: 720px;
    width: 720px;
    background-size: 720px;
    margin-left: -550px;
    margin-right: 180px;
  }
`;
