import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import {APP_MODE} from "../../types";
import {observer} from "mobx-react-lite";

const AppModeChanger = () => {
  const {settingsState} = useContext(WhiteboardAppContext);

  return (
    <button style={{
      position: "fixed",
      left: 100,
      bottom: 0
    }} onClick={() => {
      if (settingsState?.getAppMode() === APP_MODE.SELECTION_MODE) {
        settingsState?.changeAppMode(APP_MODE.DRAWING_MODE)
      } else {
        settingsState?.changeAppMode(APP_MODE.SELECTION_MODE)
      }
    }}>
      Change
    </button>
  );
};

export default observer(AppModeChanger);
