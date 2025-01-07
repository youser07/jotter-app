import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

function ModalEditNote({ isEditModalOpen, setIsEditModalOpen, editingNote, setEditingNote }) {
  return (
    <Dialog open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
      <DialogTitle>Edit Note</DialogTitle>
      <DialogContent>
        {/* Title input field */}
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={editingNote ? editingNote.title : ""}
          onChange={(e) =>
            setEditingNote((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        {/* Content input field */}
        <TextField
          margin="dense"
          label="Content"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={editingNote ? editingNote.content : ""}
          onChange={(e) =>
            setEditingNote((prev) => ({ ...prev, content: e.target.value }))
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsEditModalOpen(false)} color="primary">
          Cancel
        </Button>
        {/* Save button will be added later */}
      </DialogActions>
    </Dialog>
  );
}

export default ModalEditNote; 