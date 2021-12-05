import React, {useContext, useRef} from 'react';
import {WhiteboardAppContext} from "../../store";
import {observer} from "mobx-react-lite";

interface WBDrawProps {
  children?: React.ReactNode
}

const WBDraw = ({children}: WBDrawProps) => {
  const {shapeState} = useContext(WhiteboardAppContext)
  const ref = useRef<HTMLDivElement | null>(null);
  let mouseMoveEventActive = false

  const onMouseDown = () => {
    mouseMoveEventActive = true
    shapeState?.setDrawActive(true)
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shapeState?.drawActive) {
      const {clientX, clientY} = e

      shapeState.addPoint(clientX, clientY)
    }
  }

  const onMouseUp = () => {
    mouseMoveEventActive = false
    shapeState?.setDrawActive(false)
  }

  return (
    <div ref={ref} className={"wb-draw w-100"} style={{height: "calc(100vh - 20px)"}} onMouseDown={onMouseDown}
         onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      {children}
    </div>
  );
};

export default observer(WBDraw);
