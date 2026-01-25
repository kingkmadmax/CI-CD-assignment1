import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, activeNoteId, onNoteClick, onDeleteNote }) => {
    if (notes.length === 0) {
        return (
            <div className="empty-list">
                <p>No notes found.</p>
            </div>
        );
    }

    // Sort notes by last modified (newest first)
    const sortedNotes = [...notes].sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="note-list">
            {sortedNotes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    isActive={note.id === activeNoteId}
                    onClick={onNoteClick}
                    onDelete={onDeleteNote}
                />
            ))}
        </div>
    );
};

export default NoteList;
