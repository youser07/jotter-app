import React from "react";

import HighlightIcon from "@mui/icons-material/Highlight"; // Correct import for HighlightIcon

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon /> {/* Using HighlightIcon */}
        Jotter
      </h1>
    </header>
  );
}

export default Header;
