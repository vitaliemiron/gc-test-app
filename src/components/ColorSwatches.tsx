import React from "react";

const colors = ["red", "blue", "green", "yellow", "purple"] as const;

export const ColorSwatches = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: color,
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default ColorSwatches;
