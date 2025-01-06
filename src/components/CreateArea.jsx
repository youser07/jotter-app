import React, { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import styles from "./CreateArea.module.css";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });
  const [height, setHeight] = useState("auto"); // Track the height of the textarea
  const textareaRef = useRef(null); // Reference to the textarea element

  // Handle input changes (title, content)
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });

    // Adjust height based on content size
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height before calculating
      setHeight(`${textareaRef.current.scrollHeight}px`); // Set the new height based on content
    }
  }

  // Submit note and reset the textarea size
  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setHeight("auto"); // Reset height for the next note
    setExpanded(false); // Collapse the textarea after submission
    event.preventDefault();
  }

  // Handle textarea expansion (expand on focus)
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className={styles["create-note"]}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onFocus={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={1}
          ref={textareaRef} // Attach the reference to the textarea
          style={{
            height,
            transition: "height 0.3s ease-out", // Smooth transition when height changes
            overflow: "hidden",
            resize: "none",
          }}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
