import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const DragTypes = {
  SECTION: "SECTION",
  TASK: "TASK"
};
function DragProvider(props) {
  return <DndProvider {...props} backend={Backend} />;
}

export { DragProvider, DragTypes };
