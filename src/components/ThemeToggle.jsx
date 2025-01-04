import React from "react";
import { Switch } from "@mui/material"; // Using Material-UI Switch for the sliding effect

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <div
      style={{
        position: "fixed", // Fix the button to a specific position
        bottom: "20px", // Adjust the distance from the bottom
        right: "20px", // Adjust the distance from the right
        zIndex: 1000, // Ensure the button appears on top of other elements
        backgroundColor: "transparent", // Ensure no background color for the container
        borderRadius: "50%", // Rounded corners to give it that iPhone slider look
        padding: "8px", // Space around the button
        display: "flex", // Use flexbox to align the switch nicely
        alignItems: "center", // Center the switch vertically
        justifyContent: "center", // Center the switch horizontally
      }}
    >
      <Switch
        checked={darkMode} // Whether the switch is on or off (dark or light mode)
        onChange={toggleTheme} // Function to toggle the theme
        name="themeToggle"
        color="primary" // Primary color for the switch (you can customize this)
        inputProps={{ "aria-label": "theme toggle" }} // Accessibility label
        sx={{
          width: "60px",  // Make the switch a little larger (like iPhone's)
          height: "34px", // Same height as the iPhone slider
          borderRadius: "20px",  // Rounded corners for the switch
          "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(26px)", // Adjusted for the sliding effect
          },
          "& .MuiSwitch-track": {
            borderRadius: "20px",  // Ensuring the track has rounded corners
          },
          "& .MuiSwitch-switchBase.Mui-focusVisible": {
            outline: "none", // Remove the outline when the switch is focused
          },
        }}
      />
    </div>
  );
}

export default ThemeToggle;
    