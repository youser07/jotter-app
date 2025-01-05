import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Note.module.css"; // Import the CSS module

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // Apply the darkMode class dynamically based on the dark mode state
  const noteClass = props.darkMode ? `${styles.note} ${styles.darkMode}` : styles.note;

  return (
    <div className={noteClass}> {/* Apply the 'note' class with conditional darkMode class */}
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.content}>{props.content}</p>
      <button className={styles.deleteButton} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;  
