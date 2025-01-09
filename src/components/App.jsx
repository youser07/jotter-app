import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import ModalEditNote from "./ModalEditNote"; // Import the new ModalEditNote component
import LoginPage from "./LoginPage"; // Import the LoginPage component

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, { ...newNote, id: Date.now() }];
      
      if (newNote.title === "" && newNote.content === "") {
        setTimeout(() => {
          setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== updatedNotes[updatedNotes.length - 1].id)
          );
        }, 2000);
      }

      return updatedNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function handleEdit(id) {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditingNote(noteToEdit);
    setIsEditModalOpen(true);
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Main route that handles both login and the homepage */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <div>
                  <Header />
                  <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
                  <CreateArea onAdd={addNote} />
                  {notes.map((noteItem) => (
                    <Note
                      key={noteItem.id}
                      id={noteItem.id}
                      title={noteItem.title}
                      content={noteItem.content}
                      onDelete={deleteNote}
                      onEdit={handleEdit}
                      darkMode={darkMode}
                    />
                  ))}
                  <Footer />
                  <ModalEditNote
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    editingNote={editingNote}
                    setEditingNote={setEditingNote}
                  />
                </div>
              ) : (
                <LoginPage setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
