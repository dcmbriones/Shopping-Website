//Builds the top part of the web

import React from "react";
import NavigationButton from "./NavigationButton";

const menus = [
  { name: "Appliances", url: "#" },
  { name: "Groceries", url: "#" },
  { name: "Gadgets", url: "#" },
  { name: "Clothing", url: "#" },
];

const NavigationBar = ({ selectedTab, onSelectTab }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1rem",
        background: "#FFB6C1",
      }}
    >
      <div style={{ width: "40%", fontWeight: "bold", fontSize: "2.75rem" }}>
        Lazado
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
      {menus.map((menu, index) => (
        <button
            key={index}
            onClick={() => onSelectTab(menu.name)}
            style={{
            backgroundColor: menu.name === "Appliances" ? "#FFDDE2" : "transparent",
            borderRadius: "20px",
            border: "none",
            padding: "1rem 1.5rem",
            cursor: "pointer",
            fontSize: "1rem",
            color: "black",
            }}
        >
    {menu.name}
  </button>
))}

      </div>
    </nav>
  );
};

export default NavigationBar;
