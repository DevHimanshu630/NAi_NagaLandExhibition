import React, { useState } from "react";
import Modal from "react-modal";
import "./Panel.css";
import { IoMdHome } from "react-icons/io";
// Importing images
import image1 from "./assets/1.0.jpg";
import image2 from "./assets/2.0.jpg";
import image3 from "./assets/3.0.jpg";
import image4 from "./assets/4.0.jpg";
import image5 from "./assets/5.0.jpg";
import image6 from "./assets/6.0.jpg";
import image7 from "./assets/7.0.jpg";
import image8 from "./assets/8.0.jpg";
import image9 from "./assets/9.0.jpg";
import image10 from "./assets/10.0.jpg";
import image11 from "./assets/11.0.jpg";
import image12 from "./assets/12.0.jpg";
import { NavLink } from "react-router-dom";
function Panel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  const imageTitle = [
    "Naga Land & People- Traveler's Account",
    "Colonial Inroads in Naga Hills (1832-1886)",
    "World Wars and Naga Hills(1914-19 and 1939-45)",
    "INA and Netaji",
    "Statehood to Nagaland",
    "Democracy @Work - 1963 Assembly Elections",
    "Democracy @Work - Key Players",
    "Peace Mission (1964-65)",
    "Peace Mission - From Cartoonists' Eye",
    "Road to Progress",
    "First in Nagaland",
    "Important Visitors to Nagaland",
  ];
  const openModal = (index) => {
    setSelectedImage(images[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="App1">
      {/* Set background image for the body */}
      <div className="background"></div>

      <div className="circle-container">
        {images.map((image, index) => (
          <div key={index} className="circle" onClick={() => openModal(index)}>
            <span className="circle-title">{imageTitle[index]}</span>
          </div>
        ))}
      </div>

      <div className="home_icon">
        <NavLink to="/">
          <IoMdHome />
        </NavLink>
      </div>

      {/* Modal to display the clicked image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Image Modal"
      >
        <button className="close" onClick={closeModal}>
          Close
        </button>
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </Modal>
    </div>
  );
}

export default Panel;
