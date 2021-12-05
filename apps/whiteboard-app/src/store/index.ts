import {makeAutoObservable} from "mobx";
import React from "react";
import {ShapeState} from "./shape";

export interface WhiteboardAppStateProps {
  shapeState: ShapeState | undefined
}

class WhiteBoardAppState implements WhiteboardAppStateProps {
  shapeState: ShapeState | undefined = undefined

  constructor() {
    this.shapeState = new ShapeState(this)
    makeAutoObservable(this)
  }
}

export const WhiteBoardState = new WhiteBoardAppState()
export const WhiteboardAppContext = React.createContext<WhiteBoardAppState>({} as WhiteBoardAppState)
