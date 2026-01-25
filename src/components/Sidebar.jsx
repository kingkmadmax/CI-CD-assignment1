import React from 'react';

const Sidebar = ({ onAddNote, searchQuery, setSearchQuery, children }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Notes</h1>
                <button className="btn btn-primary" onClick={onAddNote}>
                    + New
                </button>
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {children}
        </div>
    );
};

export default Sidebar;
