import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 80vh;
  background-image: linear-gradient(
    to bottom,
    #dfe1e0,
    #dfe1e0,
    #dfe1e0,
    #dfe1e0,
    rgba(72, 154, 194, 0.8)
  );
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 40px;

  h1 {
    font-family: "Courier New", Courier, monospace;

    width: 300px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: -120px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 35px;
      width: 750px;
    }
  }

  @media (min-width: 1980px) {
    h1 {
      font-size: 90px;
      width: 1350px;
      height: 290px;
    }
  }
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-top: 170px;
  margin-bottom: 100px;

  ul {
    text-align: center;

    display: grid;
    grid-gap: 5px;

    width: 240px;

    border: 1px solid rgba(169, 169, 169);
    border-radius: 4px;

    padding-left: 0;
    padding-bottom: 20px;

    background-color: rgba(235, 198, 120);

    font-family: "Courier New", Courier, monospace;
    font-size: 20px;

    opacity: 0.3;

    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 750px;
    justify-content: space-around;

    ul {
      height: 300px;
      width: 300px;
    }
  }

  @media (min-width: 1980px) {
    width: 1750px;
    ul {
      height: 650px;
      width: 650px;
      font-size: 45px;
    }
  }
`;
