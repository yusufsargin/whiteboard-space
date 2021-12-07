import React from 'react';
import {getComponentSvgPath} from "../../utils/shape/shape.helpers";
import {observer} from "mobx-react-lite";

interface ShapeProps {
  points: Array<Array<number>>
  strokeSize: number
}

const Shape = ({points, strokeSize = 8}: ShapeProps) => {
  const pathData = getComponentSvgPath(points, strokeSize)

  return <path d={pathData} fill={"black"} opacity={1}/>
};

export default observer(Shape);
