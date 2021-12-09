import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import {APP_MODE} from "../../types";
import {observer} from "mobx-react-lite";

function AppModeComponent() {
  const {settingsState} = useContext(WhiteboardAppContext);
  const appMode = settingsState?.getAppMode()
  let mode = "selection-mode"

  if (appMode === APP_MODE.SELECTION_MODE) {
    mode = "selection-mode"
  } else if (appMode === APP_MODE.DRAWING_MODE) {
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

export default observer(AppModeComponent);
