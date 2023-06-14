import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Gasbar from "../components/Gasbar";
import Modal from "../components/Modal";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import "./Dashboard.css";

interface DashboardProps {
  modalState: boolean;
  closeModal: () => void;
}

export default function Dashboard({ modalState, closeModal }: DashboardProps) {
  const [chain, setChain] = useState<string>("");
  const [chainlist, setChainList] = useState<string[]>(["ETH"]);

  useEffect(() => {
    if (chain === "") return;
    if (chainlist.includes(chain)) return;
    const updatedChainList = [...chainlist, chain];
    setChainList(updatedChainList);
  }, [chain]);

  const handleDataFromChild = (data: string) => {
    setChain(data);
  };

  const handleDragDrop = (results: DropResult) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedChainList = [...chainlist];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedChainList] = reorderedChainList.splice(sourceIndex, 1);
      reorderedChainList.splice(destinationIndex, 0, removedChainList);

      return setChainList(reorderedChainList);
    }
  };

  return (
    <div>
      {modalState && (
        <Modal
          closeModal={closeModal}
          chainDataToParent={handleDataFromChild}
        />
      )}
      <div className="overview">
        <div className="currency">
          <p>Chain: {chain}</p>
          <span>Currency box here</span>
        </div>
        <div className="chain">
          <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId="ROOT" type="group">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {chainlist.map((chain, index) => (
                    <Draggable draggableId={chain} key={chain} index={index}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Gasbar chain={chain} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}
