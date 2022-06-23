import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background-image: url("https://www.notik.ru/content/img/1590125432_01-laptop-for-coding.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const HeaderContainer = styled.section`
  display: flex;
  height: 60px;
  width: 100%;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;

  justify-content: space-around;

  position: fixed;
  background: rgb(245, 245, 240, 0.8);

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;

  a {
    height: 30px;

    color: rgba(235, 198, 120);

    font-size: 14px;
    font-style: none;
    text-decoration: none;

    transition-delay: 0s;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease-in-out;
  }

  a:hover {
    color: black;
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    a {
      padding-left: 50px;
      font-size: 14px;
    }
  }

  @media (min-width: 1440px) {
    a {
      padding-left: 50px;
      font-size: 22px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 60px;
  width: 100%;
  background-color: black;
  opacity: 0.5;

  h1 {
    font-size: 30px;
    letter-spacing: 1px;
    position: absolute;
    color: white;
    left: 1%;
    top: 20%;
  }
  h2 {
    font-size: 15px;
    letter-spacing: 2px;
    position: absolute;
    color: white;
    left: 2%;
    top: 30%;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
      left: 5%;
    }

    h2 {
      font-size: 20px;
      left: 5%;
    }
  }

  @media (min-width: 1240px) {
    h1 {
      font-size: 50px;
      left: 70%;
    }

    h2 {
      font-size: 25px;
      left: 70%;
    }
  }
`;

export const ArrowDown = styled.img`
  position: absolute;
  top: 80%;
  left: 38%;
  display: flex;
  height: 80px;
  width: 80px;
  border-radius: 50%;

  background-color: beige;
  background-image: url("https://i.pinimg.com/originals/f5/e3/9b/f5e39b93b7800abf6061558ff82810ae.png");
  background-size: cover;

  border: none;

  @media (min-width: 768px) {
    height: 100px;
    width: 100px;
    left: 46%;
  }
`;
