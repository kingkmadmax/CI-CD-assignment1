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
});
