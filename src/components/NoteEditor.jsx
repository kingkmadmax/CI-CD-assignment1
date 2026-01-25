import React from 'react';

const NoteEditor = ({ activeNote, onUpdateNote }) => {
    if (!activeNote) {
        return (
            <div className="no-active-note">
                <div className="empty-state-content">
                    <h2>Select a note to view</h2>
                    <p>or create a new one to get started</p>
                </div>
            </div>
        );
    }

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField('title', e.target.value)}
                    placeholder="Note Title"
                    autoFocus
                />
                <textarea
                    id="body"
                    placeholder="Write your note here..."
                    value={activeNote.body}
                    onChange={(e) => onEditField('body', e.target.value)}
                />
            </div>
        </div>
    );
};

export default NoteEditor;
