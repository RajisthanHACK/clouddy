import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <div style={{
        display:"flex",
        flexDirection:"column",
        marginTop:"1rem"
      }}>
        <input  type="text" placeholder="Enter Address" className="address" />
        <Button className="center button" onClick={getdata}>
          Get Data
        </Button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
        }}
        className="image-list"
      >
        {data}
      </div>
    </>
  );
};

const Button = styled.button`
  appearance: button;
  background-color: #32cd32;
  border: 1px solid #32cd32;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 8px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  margin-top: 0.5rem;

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: #32cd32;
    border-color: #32cd32;
    opacity: 0.8;
  }

  &:active {
    background-color: #32cd32;
    border-color: #32cd32;
  }
`;

export default Display;
