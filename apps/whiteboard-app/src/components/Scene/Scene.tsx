import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import Shape from "../Shape/Shape";
import {observer} from "mobx-react-lite";

const SceneComp = () => {
  const {shapeState} = useContext(WhiteboardAppContext)

  return (
    <>
      {
        shapeState?.drawingPoints && shapeState.drawActive &&
        <Shape points={shapeState.drawingPoints ?? [[]]} strokeSize={8}/>
      }
      {shapeState?.shapes && shapeState.shapes.map(shape => <Shape points={shape?.points ?? [[]]}
                                                                   strokeSize={8}/>)}
    </>
  );
}

export const Scene = observer(SceneComp)
