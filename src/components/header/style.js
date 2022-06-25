import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  /* background-image: url("https://www.jonathasguerra.com.br//img/hero/1.jpg"); */
  background-image: url("https://i.pinimg.com/originals/63/00/a7/6300a74eae90be4938bb39257e3fe6d9.jpg");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30%;
  min-height: 100vh;
`;

export const HeaderContainer = styled.section`
  display: flex;
  height: 110px;
  width: 100%;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;

  justify-content: space-around;

  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 100;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (min-width: 1980px) {
  }
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;

  a {
    height: 30px;

    color: #fff;

    font-size: 14px;
    font-style: none;
    text-decoration: none;

    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease-in-out;
  }

  a:hover {
    color: rgba(235, 198, 120);
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    a {
      padding-left: 50px;
      padding-right: 50px;
      font-size: 20px;
      font-weight: normal;
    }
  }

  @media (min-width: 1440px) {
    a {
      padding-left: 50px;
      font-size: 22px;
    }
  }

  @media (min-width: 1980px) {
    a {
      padding-left: 70px;
      font-size: 42px;
    }
  }
`;

export const Title = styled.div`
  width: 100%;

  h1 {
    font-size: 30px;
    letter-spacing: 1px;
    position: absolute;
    color: black;
    left: 15%;
    top: 300px;
  }
  h2 {
    font-size: 15px;
    letter-spacing: 2px;
    position: absolute;
    color: white;
    left: 17%;
    background-color: rgba(235, 198, 120);

    top: 350px;
  }

  .arrow-down {
    animation: is-boucing 1s ease-in-out alternate infinite;

    position: absolute;
    top: 450px;
    left: 37%;

    height: 100px;
    width: 100px;
    color: rgba(235, 198, 120);

    cursor: pointer;
  }

  @keyframes is-boucing {
    to {
      transform: translateY(50px);
    }
  }

  @media (min-width: 768px) {
    h1,
    h2 {
      left: 40%;
    }
    h1 {
      top: 215px;
    }
    h2 {
      top: 265px;
      font-size: 20px;
    }
    .arrow-down {
      left: 50%;
    }
  }

  @media (min-width: 1240px) {
    h1 {
      font-size: 50px;
    }

    h2 {
      top: 295px;
      font-size: 25px;
    }
    .arrow-down {
      height: 150px;
      width: 150px;
      left: 45%;
    }
  }

  @media (min-width: 1980px) {
    h1 {
      font-size: 130px;
      top: 295px;
    }

    h2 {
      font-size: 65px;
      top: 515px;
    }
    .arrow-down {
      height: 300px;
      width: 300px;
      left: 48%;
      top: 800px;
    }
  }
`;
