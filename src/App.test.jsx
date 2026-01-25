import { describe, it, expect } from 'vitest';

describe('Basic Tests', () => {
    it('should pass a simple test', () => {
        expect(1 + 1).toBe(2);
    });

    it('should verify string equality', () => {
        const appName = 'note-taking-app';
        expect(appName).toBe('note-taking-app');
    });

    it('should verify array contains element', () => {
        const notes = ['Note 1', 'Note 2', 'Note 3'];
        expect(notes).toContain('Note 2');
    });

    it('should filter notes by search query', () => {
        const notes = [
            { title: 'Shopping List', body: 'Buy groceries' },
            { title: 'Meeting Notes', body: 'Discuss project timeline' },
            { title: 'Ideas', body: 'New app features' }
        ];
        const searchQuery = 'meeting';
        const filtered = notes.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        expect(filtered).toHaveLength(1);
        expect(filtered[0].title).toBe('Meeting Notes');
    });

    it('should create a note with timestamp', () => {
        const newNote = {
            id: '123',
            title: 'Test Note',
            body: 'Test content',
            lastModified: Date.now()
        };
        expect(newNote).toHaveProperty('id');
        expect(newNote).toHaveProperty('title');
        expect(newNote).toHaveProperty('body');
        expect(newNote).toHaveProperty('lastModified');
        expect(typeof newNote.lastModified).toBe('number');
    });

    it('should sort notes by last modified date', () => {
        const notes = [
            { title: 'Old Note', lastModified: 1000 },
            { title: 'New Note', lastModified: 3000 },
            { title: 'Middle Note', lastModified: 2000 }
        ];
        const sorted = [...notes].sort((a, b) => b.lastModified - a.lastModified);
        expect(sorted[0].title).toBe('New Note');
        expect(sorted[1].title).toBe('Middle Note');
        expect(sorted[2].title).toBe('Old Note');
    });
});
