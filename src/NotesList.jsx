// import React from 'react';
import PropTypes from 'prop-types';

const NotesList = ({ group, createNote, onGoBack }) => {
  if (!group) {
    return null; // Handle case where no group is selected
  }

  const notes = group.notes || []; // Ensure notes array exists, even if empty

  // Sort notes in descending order based on creation time (assuming a `createdAt` property)
  const sortedNotes = notes.slice().sort((a, b) => {
    if (!a.createdAt || !b.createdAt) return 0; // Handle missing timestamps
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="group flex flex-col space-y-2 p-4">
      <header className="group-hover:bg-gray-100 p-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`mr-2 block rounded-full w-6 h-6 bg-[color:${group.color}]`}></span>
          <h2 className="text-lg font-medium">{group.name}</h2>
        </div>
        {window.innerWidth <= 768 && (
          <button type="button" onClick={onGoBack} className="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-m7-6l7-7 7 7M14 9v6m6-6l-5.14 5.14a.5.5 0 01-.707-.707L18 12a.5.5 0 010-.707l-3.14-3.14a.5.5 0 01-.707.707z" />
            </svg>
          </button>
        )}
      </header>
      <ul className="flex-grow overflow-y-auto">
        {sortedNotes.length > 0 ? (
          sortedNotes.map((note) => (
            <li key={note.id} className="border p-2 rounded shadow-sm">
              {note.content}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No notes found in this group.</p>
        )}
      </ul>
      <form onSubmit={(event) => createNote(event.target.elements.newNote.value)}>
        <label htmlFor="newNote" className="block text-sm font-medium mb-1">
          Add Note:
        </label>
        <textarea id="newNote" name="newNote" rows="3" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Add
        </button>
      </form>
    </div>
  );
};

NotesList.propTypes = {
    group: PropTypes.shape({
      id: PropTypes.string.isRequired, // Assuming each group has a unique ID
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.object), // Optional notes array
    }),
    createNote: PropTypes.func.isRequired,
    onGoBack: PropTypes.func, // Optional prop for back button functionality (can be null)
  };

export default NotesList;
