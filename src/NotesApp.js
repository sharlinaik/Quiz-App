// src/components/NotesApp.js
import React, { useState } from 'react';
import './NotesApp.css';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (currentNote.trim() === '') return;

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = currentNote;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, currentNote]);
    }
    setCurrentNote('');
  };

  const handleEditNote = (index) => {
    setCurrentNote(notes[index]);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const filteredNotes = notes.filter((_, i) => i !== index);
    setNotes(filteredNotes);
  };

  return (
    <div className="notes-app">
      <h1>Notes App</h1>

      <input
        type="text"
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={handleAddNote}>
        {editIndex !== null ? 'Update Note' : 'Add Note'}
      </button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <span>{note}</span>
            <button onClick={() => handleEditNote(index)}>Edit</button>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp;
