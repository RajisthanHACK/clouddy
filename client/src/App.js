// import Upload from "./contracts/Upload.json";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import FileUpload from "./components/FileUpload";
// import Display from "./components/Display";
// import Modal from "./components/Modal";
// import "./App.css";

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [provider, setProvider] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const loadProvider = async () => {
//       if (provider) {
//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });
//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });

//         await provider.send("eth_requestAccounts", []);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setAccount(address);
//         let contractAddress = "0x6903407D9918B13C1144f4c9B7aB2B4b13B73Bc8";
//         const contract = new ethers.Contract(
//           contractAddress,
//           Upload.abi,
//           signer
//         );
//         console.log(contract);
//         setContract(contract);
//         setProvider(provider);
//       } else {
//         console.log("Metamask in not installed");
//       }
//     };

//     provider && loadProvider();
//   }, []);

//   return (
//     <>
//       {!modalOpen && (
//         <button className="share" onClick={() => setModalOpen(true)}>
//           Share
//         </button>
//       )}
//       {modalOpen && (
//         <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
//       )}
//       <div className="App">
//         <h1 style={{ color: "white" }}> OnCloud 3.0</h1>
//         <div className="bg"></div>
//         <div className="bg bg2"></div>
//         <div className="bg bg3"></div>

//         <p style={{ color: "white" }}>
//           Account : {account ? account : "Install metamask  connection"}{" "}
//         </p>
//         <FileUpload account={account} provider={provider} contract={contract} />
//         <Display contract={contract} account={account}></Display>
//         <Modal modal={true} contract={contract} />
//       </div>
//     </>
//   );
// }

// export default App;
// import Upload from "./contracts/Upload.json";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import FileUpload from "./components/FileUpload";
// import Display from "./components/Display";
// import Modal from "./components/Modal";
// import "./App.css";

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [provider, setProvider] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const loadProvider = async () => {
//       if (provider) {
//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });

//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });
//         await provider.send("eth_requestAccounts", []);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setAccount(address);
//         let contractAddress = "0x6903407D9918B13C1144f4c9B7aB2B4b13B73Bc8";

//         const contract = new ethers.Contract(
//           contractAddress,
//           Upload.abi,
//           signer
//         );
//         //console.log(contract);
//         setContract(contract);
//         setProvider(provider);
//       } else {
//         console.error("Metamask is not installed");
//       }
//     };
//     provider && loadProvider();
//   }, []);
//   return (
//     <>
//       {!modalOpen && (
//         <button className="share" onClick={() => setModalOpen(true)}>
//           Share
//         </button>
//       )}
//       {modalOpen && (
//         <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
//       )}

//       <div className="App">
//         <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
//         <div class="bg"></div>
//         <div class="bg bg2"></div>
//         <div class="bg bg3"></div>

//         <p style={{ color: "white" }}>
//           Account : {account ? account : "Not connected"}
//         </p>
//         <FileUpload
//           account={account}
//           provider={provider}
//           contract={contract}
//         ></FileUpload>
//         <Display contract={contract} account={account}></Display>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Upload from "./contracts/Upload.json";
import IntroPage from "./Pages/IntroPage";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x9004148Ea65e3a72f8dA10551224649e1ecc98c7";
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not connected !");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroPage account={account} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              contract={contract}
              provider={provider}
              account={account}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
