import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 12px;
    color: #d3d3d3;
  }

  .social-midia {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: white;
  }

  .linkedin {
    color: blue;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  .github {
    color: black;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  .whatsapp {
    color: green;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  .redes {
    width: 150px;
    display: flex;
    justify-content: space-around;
  }
`;
