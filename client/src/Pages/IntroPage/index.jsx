import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import hero from "../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IntroPage = ({ account }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    if (account) {
      navigate("/dashboard");
    } else {
      toast("Please Connect to Metamask 🦊");
    }
  };

  return (
    <Container>
      <Navbar account={account} />
      <div style={{ position: "relative" }}>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <Content>
        <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          <h1>
            Unlimited <span>Decentralized</span> Online Backup and Cloud Storage
          </h1>
          <p>
            A decentralized cloud storage platform that offer security, quick
            access and immutable on blockchain.{" "}
          </p>
          <Button onClick={() => onHandleClick()}>Get Started</Button>
          <ToastContainer />
        </div>
        <HeroImage>
          <img src={hero} alt="hero" />
        </HeroImage>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(255, 160, 227);
  background: linear-gradient(
    45deg,
    rgba(255, 160, 227, 1) 0%,
    rgba(204, 237, 244, 1) 100%
  );
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 5rem;
  h1 {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 3em;
    line-height: 1.2;
    margin-right: 6rem;
    color: #303030;
    span {
      font-size: 4.5rem;
      background: -webkit-linear-gradient(#e135fc, #2ae4ce);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    width: 500px;
    margin-top: 1rem;
    color: #4a4a4a;
  }
`;

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  animation: animate 10s linear infinite;
`;

const Square = styled.div`
  position: absolute;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.1);
  animation: animate 10s linear infinite;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:nth-child(1) {
    top: 50px;
    left: 130px;
    width: 100px;
    height: 100px;
  }

  &:nth-child(2) {
    z-index: 2;
    top: 420px;
    left: 500px;
    width: 120px;
    height: 120px;
  }

  &:nth-child(3) {
    left: 150px;
    width: 50px;
    height: 50px;
    top: 400px;
  }

  &:nth-child(4) {
    top: 160px;
    left: 500px;
    width: 60px;
    height: 60px;
  }
`;

const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  width: 200px;
  font-size: 1rem;
  margin-top: 2rem;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

export default IntroPage;
