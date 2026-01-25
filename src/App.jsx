import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '',
      body: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) => {
    const answer = window.confirm("Are you sure you want to delete this note?");
    if (answer) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
      if (activeNote === idToDelete) {
        setActiveNote(false);
      }
    }
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const filteredNotes = notes.filter((note) => {
    const titleMatch = note.title.toLowerCase().includes(searchQuery.toLowerCase());
    const bodyMatch = note.body.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || bodyMatch;
  });

  return (
    <>
      <Sidebar
        onAddNote={onAddNote}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <NoteList
          notes={filteredNotes}
          activeNoteId={activeNote}
          onNoteClick={setActiveNote}
          onDeleteNote={onDeleteNote}
        />
      </Sidebar>

      <NoteEditor activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </>
  );
}

export default App;
