import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background-image: url("https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif");
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  color: #ffcc57;
`;

export const HeaderContainer = styled.section`
  display: flex;
  height: 60px;
  width: 100%;

  justify-content: space-around;

  position: fixed;
  background: #fff;

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

    color: #ffcc57;

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
