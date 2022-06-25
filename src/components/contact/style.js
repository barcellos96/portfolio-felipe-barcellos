import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 55vh;
  background-image: linear-gradient(
    to bottom,
    rgba(223, 225, 224, 0.6),
    rgba(223, 225, 224, 0.8),
    rgba(223, 225, 224)
  );
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 70px;

  font-family: "Courier New", Courier, monospace;

  padding-bottom: 60px;

  .card {
    width: 220px;
    height: 195px;
    padding-top: 20px;
    margin-bottom: 20px;
    background-color: rgba(235, 198, 120);
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    font-size: 12px;
  }

  h3 {
    text-decoration: underline;
    font-weight: 400;
  }

  .email,
  .in,
  .wpp {
    cursor: pointer;
    height: 80px;
    width: 80px;
  }

  .email {
    color: red;
  }
  p {
    font-size: 12px;
    cursor: pointer;
  }
  span {
    font-weight: 600;
  }
  .wpp {
    color: green;
  }

  .in {
    color: blue;
  }

  .p-email,
  .p-in {
    color: blue;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .sec-contatos {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
    }

    .card {
      margin-left: 20px;
    }
  }

  @media (min-width: 1240px) {
    .card {
      margin-left: 40px;
      margin-right: 40px;

      font-size: 16px;

      width: 350px;
      height: 300px;
    }

    h3 {
      font-size: 30px;
      font-weight: 400;
    }
  }
`;
