import { useState } from 'react';
import ReactDom from 'react-dom'; // Import ReactDom for modal handling

const CreateGroupModal = ({ isOpen, onClose, onCreateGroup }) => {
    const [name, setName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // Default white color

    const handleClose = () => {
        setName(''); // Clear input fields on close
        setSelectedColor('#ffffff');
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Basic validation
        if (!name) {
            alert('Please enter a group name.');
            return;
        }

        // Create a new group object with unique ID
        const newGroup = {
            id: Math.random().toString(36).substring(2, 15), // Generate random ID
            name,
            color: selectedColor,
            notes: [], // Empty notes array
        };

        onCreateGroup(newGroup); // Call the callback function to create the group
        handleClose(); // Close the modal after successful creation
    };

    // Handle outside click to close modal
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    return ReactDom.createPortal(
        <div
            className={`fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-50 flex justify-center items-center ${!isOpen && 'hidden'}`}
            onClick={handleOutsideClick} // Close modal on outside click
        >
            <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Create New Group</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Group Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="color" className="block text-sm font-medium mb-1">
                            Group Color:
                        </label>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${selectedColor === '#ffffff' ? 'bg-white' : ''
                                    }`}
                                onClick={() => setSelectedColor('#ffffff')}
                            />
                            <button
                                type="button"
                                className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${selectedColor === '#ff0000' ? 'bg-red-500' : ''
                                    }`}
                                onClick={() => setSelectedColor('#ff0000')}
                            />
                            <button
                                type="button"
                                className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${selectedColor === '#00ff00' ? 'bg-green-500' : ''
                                    }`}
                                onClick={() => setSelectedColor('#00ff00')}
                            />
                            <button
                                type="button"
                                className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${selectedColor === '#0000ff' ? 'bg-blue-500' : ''
                                    }`}
                                onClick={() => setSelectedColor('#0000ff')}
                            />
                            <button
                                type="button"
                                className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${selectedColor === '#ffff00' ? 'bg-yellow-500' : ''
                                    }`}
                                onClick={() => setSelectedColor('#ffff00')}
                            />
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Create Group
                                </button>
                            </div>
                            </div>
                            </div>
                            </form>
                        
                    
            </div>
        
        </div>
    );
};

export default CreateGroupModal;