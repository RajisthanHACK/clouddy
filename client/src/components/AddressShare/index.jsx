import React, { useEffect } from "react";
import styled from "styled-components";

const AddressShare = ({ contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);

  return (
    <ShareContainer>
      <h4>Share With</h4>
      <div>
        <input
          type="text"
          className="address"
          placeholder="Enter Address"
        ></input>
      </div>
      <Button onClick={() => sharing()}>Share</Button>
      <form id="myForm">
        <select id="selectNumber">
          <option className="address">People With Access</option>
        </select>
      </form>
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  input {
    width: 240px;
    height: 35px;
    padding: 0 10px;
    border-radius: 0.4rem;
    background-color: #f0f0f0;
    border: 2px solid #d3d3d3;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    outline: none;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  select {
    width: 240px;
    height: 35px;
    padding: 0 10px;
    border-radius: 0.4rem;
    background-color: #f0f0f0;
    border: 2px solid #d3d3d3;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    outline: none;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  appearance: button;
  background-color: #1652f0;
  border: 1px solid #1652f0;
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

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: #0a46e4;
    border-color: #0a46e4;
  }

  &:active {
    background-color: #0039d7;
    border-color: #0039d7;
  }
`;

export default AddressShare;
