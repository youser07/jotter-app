import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ThemeToggle from "./ThemeToggle"; // Import the theme toggle component

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...newNote, id: Date.now() }];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Create a theme based on the darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Switch between dark and light mode
    },
  });

  return (
    <ThemeProvider theme={theme}> {/* Apply the theme globally */}
      <CssBaseline /> {/* Normalize styles across browsers */}
      <div>
        <Header />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} /> {/* Add theme toggle */}
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.id} // Use the note's id instead of index
              id={noteItem.id} // Use the unique id from the note
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              darkMode={darkMode} // Pass darkMode state here
            />
          );
        })}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
