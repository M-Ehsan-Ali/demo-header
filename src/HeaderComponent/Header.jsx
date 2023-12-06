import React, { useState } from "react";
import logo from "../download.jpeg";
import "./index.css";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [connectFieldsActive, setConnectFieldsActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <img className="logoImage" src={logo} alt="Logo" />
        {window.innerWidth > 1024 && (
          <div style={{ display: "flex", gap: "80px" }}>
            <p className="paragraphColors">Home</p>
            <p className="paragraphColors">The Agency</p>
            <p className="paragraphColors">Projects</p>
            <p
              className="paragraphColors"
              onMouseEnter={() => setConnectFieldsActive(true)}
              onClick={() => {
                setConnectFieldsActive((prev) => !prev);
                setOpenSidebar(false);
              }}
            >
              Expertise
            </p>
          </div>
        )}
        <div
          style={{
            gap: "20px",
            display: "flex",
          }}
        >
          {window.innerWidth > 500 && (
            <p className="paragraphColors">Connect with us {" >"}</p>
          )}
          {window.innerWidth <= 1024 && (
            <button
              className="sidebarBtn"
              style={{ color: openSidebar && "#FFFFFF" }}
              onClick={() => {
                setOpenSidebar((prev) => !prev);
                setConnectFieldsActive(false);
              }}
            >
              ☰
            </button>
          )}
        </div>
      </div>
      {openSidebar && (
        <div style={{ padding: "40px 22px 84px 22px" }}>
          <p className="paragraphColorsMenu">Home</p>
          <p className="paragraphColorsMenu">Agency</p>
          <p className="paragraphColorsMenu">Projects</p>
          <p
            className="paragraphColorsMenu"
            onMouseEnter={() => setConnectFieldsActive(true)}
            onClick={() => {
              setConnectFieldsActive((prev) => !prev);
              setOpenSidebar(false);
            }}
          >
            Expertise
          </p>

          {window.innerWidth <= 500 && (
            <p className="paragraphColorsMenu">Connect with us {">"}</p>
          )}
        </div>
      )}
      {connectFieldsActive && (
        <div
          style={{ padding: "40px 22px 84px 22px" }}
          onMouseLeave={() => setConnectFieldsActive(false)}
        >
          <p className="subParagraph">Sub1</p>
          <p className="subParagraph">Sub2</p>
          <p className="subParagraph">Sub3</p>
          <p className="subParagraph">Sub4</p>
        </div>
      )}
    </nav>
  );
};

export default Header;
