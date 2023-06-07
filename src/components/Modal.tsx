import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MUIBasicSelect from "./MUIBasicSelect";
import "./Modal.css";

interface ModalProps {
  closeModal: () => void;
  chainDataToParent: (data: string) => void;
}

export default function Modal({ closeModal, chainDataToParent }: ModalProps) {
  const [addChain, setAddChain] = useState<string>("");

  const handleAdd = () => {
    chainDataToParent(addChain);
    closeModal();
  };

  const handleSetAddChain = (data: string) => {
    setAddChain(data);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal-menu">
          <h3>Add Chain</h3>
          <MUIBasicSelect handleSetAddChain={handleSetAddChain} />
          <button onClick={handleAdd}> Add</button>
        </div>
      </div>
    </div>
  );
}
