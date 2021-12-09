import React, {useContext, useRef} from 'react';
import {WhiteboardAppContext} from "../../store";
import {observer} from "mobx-react-lite";
import {SvgContainer} from "../SvgContainer";
import {APP_MODE} from "../../types";

interface WBDrawProps {
  children?: React.ReactNode
}

const WBDrawComp = ({children}: WBDrawProps) => {
  const {shapeState, settingsState} = useContext(WhiteboardAppContext)
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseDown = () => {
    if (settingsState?.getAppMode() === APP_MODE.DRAWING_MODE) {

      shapeState?.setDrawActive(true)
    }
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shapeState?.drawActive && settingsState?.getAppMode() === APP_MODE.DRAWING_MODE) {
      const {clientX, clientY} = e

      shapeState.addNewPoint(clientX, clientY)
    }
  }

  const onMouseUp = () => {
    if (shapeState?.drawActive) {
      shapeState?.setDrawActive(false)
      shapeState.addNewShape()
    }
  }

  return (
    <div ref={ref} className={"wb-draw w-100"} style={{height: "calc(100vh - 20px)"}} onMouseDown={onMouseDown}
         onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <SvgContainer style={{width: "100%", height: "100%"}}>
        {children}
      </SvgContainer>
    </div>
  );
};

export const WBDraw = observer(WBDrawComp);
