import React, { useCallback, useState } from "react";
import styled from "styled-components";
import AddressShare from "../../components/AddressShare";
import FileUpload from "../../components/FileUpload";
import Display from "../../components/Display";

const Dashboard = ({ contract, provider, account }) => {
  return (
    <DashSection>
      <h2>Dashboard</h2>
      <Button>{account}</Button>
      <Grid>
        <div
          style={{
            width: "100%",
            height: "70vh",
            borderRight: "2px solid #999999",
          }}
        >
          <AddressShare contract={contract} />
        </div>
        <div
          style={{
            marginLeft: "2rem",
          }}
        >
          <FileUpload
            contract={contract}
            provider={provider}
            account={account}
          />
          <Display 
            contract={contract}
            account={account}
          />
        </div>
      </Grid>
    </DashSection>
  );
};

const DashSection = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;
  padding: 3rem 1rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #212020;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  margin-bottom: 2rem;
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

export default Dashboard;
