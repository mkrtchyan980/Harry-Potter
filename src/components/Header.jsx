import React, { useState } from "react";
import "../Css/Style.css";

function Header({ isDark, setIsDark }) {
  return (
    <div className="header">
      <header>
        <nav>
          <button
            className={!isDark ? "App" : "dark"}
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            Click Me
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
