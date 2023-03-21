import React from "react";
import styled from "styled-components";

const Navbar = ({ account }) => {
  return (
    <NavContainer>
      <Logo>Clouddy.</Logo>
      {account ? (
        <Button disabled={""}>{account}</Button>
      ) : (
        <Button>Connect To Metamask 🦊</Button>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Logo = styled.span`
  font-family: "Comfortaa", cursive;
  font-family: "Righteous", cursive;
  font-size: 1.5rem;
  font-weight: 700;
  color: #222222;
`;

const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
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

export default Navbar;
