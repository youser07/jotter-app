import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import ModalEditNote from "./ModalEditNote"; // Import the new ModalEditNote component

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const [editingNote, setEditingNote] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  
  function addNote(newNote) {
    setNotes((prevNotes) => {
      // Add the note to the state immediately
      const updatedNotes = [...prevNotes, { ...newNote, id: Date.now() }];
      
      // If the note is empty, delete it after 5 seconds
      if (newNote.title === "" && newNote.content === "") {
        setTimeout(() => {
          setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== updatedNotes[updatedNotes.length - 1].id)
          );
        }, 2000); // Wait for 5 seconds before deleting
      }
  
      return updatedNotes;
    });
  }
  
  

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
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
      <div>
        <Header />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={handleEdit}
              darkMode={darkMode}
            />
          );
        })}
        <Footer />
        {/* Use the ModalEditNote component here */}
        <ModalEditNote
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
