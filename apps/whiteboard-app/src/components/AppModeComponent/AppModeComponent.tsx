import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import {AppMode} from "../../model";

function AppModeComponent() {
  const {appMode} = useContext(WhiteboardAppContext);
  let mode = "selection-mode"

  if (appMode === AppMode.SELECTION_MODE) {
    mode = "selection-mode"
  } else if (appMode === AppMode.DRAW_MODE) {
    mode = "draw-mode"
  }

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 5,
      fontSize: 14,
      fontWeight: "bold"
    }}>
      {mode}
    </div>
  );
}

export default AppModeComponent;
