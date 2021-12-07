import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import Shape from "../Shape/Shape";
import {observer} from "mobx-react-lite";

export const Scene = observer(() => {
  const {shapeState} = useContext(WhiteboardAppContext)

  return (
    <>
      {
        shapeState?.points && <Shape points={shapeState.points} strokeSize={8}/>
      }
      {shapeState?.shapes && shapeState.shapes.map(shape => <Shape points={shape.points}
                                                                   strokeSize={shape.strokeSize}/>)}
    </>
  );
})
