import React, {useContext, useRef} from 'react';
import {WhiteboardAppContext} from "../../store";
import {observer} from "mobx-react-lite";
import {SvgContainer} from "../SvgContainer";
import {AppMode} from "../../model";

interface WBDrawProps {
  children?: React.ReactNode
}

const WBDrawComp = ({children}: WBDrawProps) => {
  const {shapeState, appMode} = useContext(WhiteboardAppContext)
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseDown = () => {
    if (appMode === AppMode.DRAW_MODE) {

      shapeState?.setDrawActive(true)
    }
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shapeState?.drawActive && appMode === AppMode.DRAW_MODE) {
      const {clientX, clientY} = e

      shapeState.addPoint(clientX, clientY)
    }
  }

  const onMouseUp = () => {
    if (appMode === AppMode.DRAW_MODE) {
      shapeState?.setDrawActive(false)
      shapeState?.addToShape()

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
