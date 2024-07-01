import React, { useContext } from "react";
import styles from "./styles/SelectedNotes.module.css";
import AppContext from "./AppContext";

function NoteHeading({ noteHeading }) {
  const { isMobile, setHide, setCurrentGroup } = useContext(AppContext);
  const { letters } = noteHeading;

  const handleClick = () => {
    setCurrentGroup(noteHeading);
    if (isMobile) {
      setHide(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.groupName} `}
      key={noteHeading?.name}
    >
      <div
        className={styles.icon}
        style={{ backgroundColor: noteHeading?.color }}
      >
        {noteHeading.name && letters}
      </div>
      <div>{noteHeading.name.slice(0,12)}</div>
    </div>
  );
}

export default NoteHeading;