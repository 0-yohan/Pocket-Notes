// import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

export default function NewGroup({ isOpen, onClose, onCreateGroup }) {
  const [newGroup, setNewGroup] = useState({
    name: '',
    color: 'blue', // Set a default color
    notes: [], // Empty notes array for new group
  });
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  },[isOpen]); // Re-attach event listener on state change

  const handleCreateGroup = (event) => {
    event.preventDefault();
    onCreateGroup(newGroup);
    setNewGroup({ name: '', color: 'blue', notes: [] }); // Reset state after creation
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto bg-gray-opacity-50 flex justify-center items-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
      ref={modalRef}
    >
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="mb-4 text-xl">Create Group</h3>
        <form onSubmit={handleCreateGroup}>
          <div className="mb-4">
            <label htmlFor="groupName" className="block text-sm font-medium mb-1">
              Group Name:
            </label>
            <input
              type="text"
              id="groupName"
              name="name"
              value={newGroup.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="groupColor" className="block text-sm font-medium mb-1">
              Group Color:
            </label>
            <select id="groupColor" name="color" value={newGroup.color} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500">
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="gray">Gray</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

NewGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreateGroup: PropTypes.func.isRequired,
};
