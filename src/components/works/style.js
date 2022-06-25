import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 70vh;
  background-image: linear-gradient(
    to bottom,
    rgba(72, 154, 194, 0.8),
    rgba(72, 154, 194, 0.9),
    #489ac2,
    #489ac2,
    #489ac2,
    rgba(72, 154, 194, 0.9),
    rgba(72, 154, 194, 0.8),
    rgba(72, 154, 194, 0.7),
    rgba(223, 225, 224, 0.6)
  );
  align-items: center;
  justify-content: center;

  flex-direction: column;

  font-family: "Courier New", Courier, monospace;

  @media (min-width: 1980px) {
    .port-h1 {
      font-size: 90px;
      margin-top: -80px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  color: black;
  font-size: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1980px) {
    width: 90%;
    height: 800px;

    margin-top: -80px;
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: 50px;
  margin-left: -3px;
  width: 100%;

  .div-carousel {
    display: flex;
    height: 420px;
    width: 100%;
    justify-content: center;
  }
  .rec-arrow {
    background-color: var(--blue) !important;
    transition: all 0.3s ease;
    font-size: 1.1rem !important;
    color: white !important;
    width: 1.7rem !important;
    height: 1.7rem !important;
    min-width: 1.7rem !important;
    line-height: 1.7rem !important;
  }

  .rec-dot_active {
    background-color: white;
    box-shadow: 0 0 1px 3px var(--blue);
  }

  .rec-dot:focus,
  .rec-dot:hover {
    box-shadow: 0 0 1px 3px var(--blue) !important;
  }

  .rec-dot_active:focus,
  .rec-dot_active:hover {
    background-color: var(--blue) !important;
    box-shadow: 0 0 1px 3px var(--blue) !important;
  }

  .display-carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /* box-shadow: 2px 2px 5px 2px #fff; */
    background-color: rgba(235, 198, 120);
    border-radius: 4px;
    margin: 15px;

    .title-description {
      margin-left: 10px;
      margin-right: 10px;
      padding-left: 10px;
      padding-right: 10px;

      max-height: 150px;
      max-width: 25ch;

      overflow-y: scroll;
    }

    .title-description::-webkit-scrollbar {
      background-color: #d6d6d6;
      border-radius: 20px;
      border: 1px solid transparent;
      width: 2px;
    }
    h3 {
      margin-top: 10px;
      font-size: 28px;
      padding-bottom: 15px;
    }

    p {
      font-size: 20px;
      margin-top: -40px;
    }

    .links {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      width: 95%;

      a {
        padding-right: 50px;
        padding-left: 15px;
        text-decoration: none;
        color: black;
      }
    }

    .p-code,
    .p-web {
      position: absolute;
      margin-top: -30px;
      margin-left: 30px;
      font-size: 12px;
      font-weight: bold;
    }

    .icon-github,
    .icon-link {
      height: 25px;
      width: 25px;

      &:hover {
        cursor: pointer;
      }
    }

    img {
      margin-top: 10px;
      width: 85%;
      height: 40%;
      border-radius: 4px;

      box-shadow: 1px 1px 5px 1px #000;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
      width: 95%;
      max-width: 1240px;

      img {
        margin-left: 10px;
        margin-top: 20px;
        height: 85%;
        width: 50%;
        border-radius: 14px;
      }

      .links {
        position: absolute;
        margin-left: 12%;

        margin-top: 290px;
        width: 300px;
        a {
          padding-right: 80px;
          padding-left: 30px;
        }
      }

      .p-code,
      .p-web {
        position: absolute;
        width: 100px;
        margin-top: -45px;
        margin-left: 60px;
        font-size: 20px;
        font-weight: bold;
      }

      .icon-github,
      .icon-link {
        height: 55px;
        width: 55px;
      }

      .title-description {
        position: absolute;
        width: 10% !important;

        margin-top: 20px;
        margin-left: 13%;
        max-height: 230px;

        overflow-y: scroll;
      }
    }

    @media (min-width: 1024px) {
      .title-description {
        overflow: hidden;
      }
    }

    @media (min-width: 1350px) {
      .links {
        margin-left: 620px;
      }
      .title-description {
        margin-left: 650px;
      }
    }

    @media (min-width: 1980px) {
      h3 {
        font-size: 50px;
      }

      p {
        font-size: 30px;
      }
      .title-description {
        overflow-y: scroll;
      }
    }
  }
`;
