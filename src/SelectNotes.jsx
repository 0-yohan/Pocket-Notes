import React, { useContext } from "react";
import styles from "./styles/SelectedNotes.module.css";
import CreateNote from "./CreateNote";
import NoteHeading from "./NoteHeading";
import AppContext from "./AppContext";

function SelectNotes() {
  const { modal, toggleModal, noteHeadings, hide } = useContext(AppContext);

  return (
    <div className={`${styles.container} ${hide && styles.hidden} `}>
      <h2 >Pocket Notes</h2>
      <CreateNote modal={modal} toggleModal={toggleModal} />
      {noteHeadings.length > 0 && (
        <>
          {noteHeadings.map((noteHeading) => {
            return (
              <div key={noteHeading.name}>
                <NoteHeading noteHeading={noteHeading} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SelectNotes;