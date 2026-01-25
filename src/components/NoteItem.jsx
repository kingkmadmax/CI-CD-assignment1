import React from 'react';

const NoteItem = ({ note, isActive, onClick, onDelete }) => {
    return (
        <div
            className={`note-item ${isActive ? 'active' : ''}`}
            onClick={() => onClick(note.id)}
        >
            <div className="note-item-content">
                <h3 className="note-title">{note.title || 'Untitled Note'}</h3>
                <p className="note-preview">
                    {note.body ? note.body.substring(0, 50) + '...' : 'No content'}
                </p>
                <span className="note-date">
                    {new Date(note.lastModified).toLocaleDateString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </span>
            </div>
            <button
                className="delete-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(note.id);
                }}
            >
                &times;
            </button>
        </div>
    );
};

export default NoteItem;
