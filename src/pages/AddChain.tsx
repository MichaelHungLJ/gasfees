import React, { useState } from "react";
import { Link } from "react-router-dom";
import MUIBasicSelect from "../components/MUIBasicSelect";
import Modal from "../components/Modal";

export default function AddChain() {
  const [chain, setChain] = useState<string>("");

  const handleDataFromChild = (data: string) => {
    setChain(data);
  };

  return (
    <div>
      <MUIBasicSelect chainDataToParent={handleDataFromChild} />
      Hello {chain}
      <div>
        <button>Open</button>
      </div>
    </div>
  );
}
