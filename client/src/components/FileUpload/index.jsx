import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FileUpload = ({ account, provider, contract }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image Selected");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFiles = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "273da945af069103086e",
            pinata_secret_api_key:
              "9364f4ac2a8dc2c0e8ebbc7b9c5e4e9ee992c3404ef6ec92aaa816b807550d48",
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `ipfs://${resFiles.data.IpfsHash}`;
        console.log(ImgHash);
        await contract.add(account, ImgHash);
        toast("File uloaded succesfully");
        setFileName("No image Selected");
        setFile(null);
      } catch (error) {
        toast("Unable to upload to pinata");
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      e.preventDefault();
    };
  };

  return (
    <FileUpContainer>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload">Choose Image</label>
        <input
          disable={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <Button type="submit" className="upload" disabled={!file}>
          Upload File
        </Button>
      </form>
      <ToastContainer/>
    </FileUpContainer>
  );
};

const FileUpContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    label {
      font-size: 1rem;
      font-weight: 500;
    }

    input {
      padding: 1rem 2rem;
      border-radius: 0.4rem;
      background-color: #f0f0f0;
      border: 2px solid #d3d3d3;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
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
  margin-top: 1rem;

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

export default FileUpload;
