import React, { useState } from "react";
import logo from "../download.jpeg";
import "./index.css";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <img className="logoImage" src={logo} alt="Logo" />
        {window.innerWidth > 1024 && (
          <div style={{ display: "flex", gap: "80px" }}>
            <p className="paragraphColors">Home</p>
            <p className="paragraphColors">The Agency</p>
            <p className="paragraphColors">Projects</p>
            <p className="paragraphColors">Expertise</p>
          </div>
        )}
        <div
          style={{
            gap: "20px",
            display: "flex",
          }}
        >
          {window.innerWidth > 500 && (
            <p className="paragraphColors">Connect with us {">"}</p>
          )}
          {window.innerWidth <= 1024 && (
            <button
              className="sidebarBtn"
              onClick={() => setOpenSidebar((prev) => !prev)}
            >
              ☰
            </button>
          )}
        </div>
      </div>
      {openSidebar && (
        <div>
          <p className="paragraphColors">Home</p>
          <p className="paragraphColors">Agency</p>
          <p className="paragraphColors">Projects</p>
          <p className="paragraphColors">Expertise</p>

          {window.innerWidth <= 500 && (
            <p className="paragraphColors">Connect with us {">"}</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
