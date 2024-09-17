import React, { useState } from 'react';
import './App.css';  // Certifique-se de que esse arquivo CSS existe
import videoFile from './assets/videos/fundo da home 2 (1).mp4';
import logo from './assets/imgs/LogoEnseada.png';  // Caminho para o logo
import { FaInstagram, FaWhatsapp, FaVimeoV } from 'react-icons/fa';

const FirstPart = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="video-container">
      <video
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={videoFile} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <img src={logo} alt="Logo Enseada" className="center-logo" />
      <p className="center-text">
        Somos um porto seguro onde os projetos podem desenvolver<br/> tudo o que precisam para conseguir navegar o mundo
      </p>
      <img src={logo} alt="Logo Enseada" className="corner-logo" />
      
      {/* Botão para abrir a sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Botão para fechar a sidebar */}
        <button className="sidebar-close" onClick={toggleSidebar}>
          &times;
        </button>
        <div className="sidebar-content">
          <ul className="sidebar-menu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#quem-somos">QUEM SOMOS</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
          <div className="sidebar-footer">
            <a href="https://www.instagram.com/enseada_lmes" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <div className="profile-names">
              <span>@enseada_lmes</span>
              <span>@enseadacultural</span>
            </div>
            <div className="sidebar-social-icons">
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
              <a href="https://vimeo.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaVimeoV className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;