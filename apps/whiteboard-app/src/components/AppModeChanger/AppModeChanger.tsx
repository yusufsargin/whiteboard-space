import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import {AppMode} from "../../model";

const AppModeChanger = () => {
  const {setAppMode, appMode} = useContext(WhiteboardAppContext);
  console.log(appMode)
  return (
    <button style={{
      position: "fixed",
      left: 100,
      bottom: 0
    }} onClick={() => {
      console.log(appMode)
      if (appMode === AppMode.SELECTION_MODE) {
        setAppMode(AppMode.DRAW_MODE)
      } else {
        setAppMode(AppMode.SELECTION_MODE)
      }
    }}>
      Change
    </button>
  );
};

export default AppModeChanger;
