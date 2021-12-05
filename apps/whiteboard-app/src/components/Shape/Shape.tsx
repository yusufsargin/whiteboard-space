import React, {useContext} from 'react';
import {WhiteboardAppContext} from "../../store";
import {getComponentSvgPath} from "../../utils/shape/shape.helpers";
import {observer} from "mobx-react-lite";
import {SvgContainer} from "../SvgContainer";

const Shape = () => {
  const {shapeState} = useContext(WhiteboardAppContext)
  const pathData = getComponentSvgPath(shapeState?.points)

  return <SvgContainer className={"w-100 h-100"}>
    <path d={pathData} fill={"black"} opacity={1}/>
  </SvgContainer>
};

export default observer(Shape);
