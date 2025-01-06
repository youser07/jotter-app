import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit"; // Import Material UI Edit icon
import styles from "./Note.module.css"; // Import the CSS module

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id);
  }

  // Apply the darkMode class dynamically based on the dark mode state
  const noteClass = props.darkMode ? `${styles.note} ${styles.darkMode}` : styles.note;

  return (
    <div className={noteClass}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.content}>{props.content}</p>

      {/* Button Container */}
      <div className={styles.buttonContainer}>
        {/* Edit Button */}
        <button className={styles.editButton} onClick={handleEdit}>
          <EditIcon />
        </button>

        {/* Delete Button */}
        <button className={styles.deleteButton} onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
