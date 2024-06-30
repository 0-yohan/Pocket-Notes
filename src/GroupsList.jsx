// import React from 'react';
import PropTypes from 'prop-types';


// const GroupsList = ({ groups, selectGroup, button, setGroups }) => {
const GroupsList = ({ groups, selectGroup, button,  }) => {
  
  return (
    
    <ul className="space-y-2">
      {groups.map((group) => (
        <li key={group.id} className="p-2 rounded hover:bg-gray-100">
          {button ? (
            <button type="button" onClick={() => selectGroup(group)} className="w-full flex items-center justify-between">
              <span className="text-lg font-medium">{group.name}</span>
              <span className="text-gray-400">...</span>
            </button>
          ) : (
            <span className="text-lg font-medium">{group.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
};



GroupsList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectGroup: PropTypes.func.isRequired,
  button: PropTypes.bool, // Optional prop for button display
  setGroups: PropTypes.func, // Optional prop for updating groups
};

export default GroupsList;
