import {makeAutoObservable} from "mobx";
import React from "react";
import {ShapeState} from "./shape";
import {AppMode} from "../model";

export interface WhiteboardAppStateProps {
  shapeState: ShapeState | undefined
  appMode: AppMode
}

class WhiteBoardAppState implements WhiteboardAppStateProps {
  shapeState: ShapeState | undefined = undefined
  appMode: AppMode = AppMode.DRAW_MODE

  constructor() {
    this.shapeState = new ShapeState(this)
    makeAutoObservable(this)
  }

  setAppMode(appMode: AppMode) {
    console.log(this.appMode)
    this.appMode = appMode
  }
}

export const WhiteBoardState = new WhiteBoardAppState()
export const WhiteboardAppContext = React.createContext<WhiteBoardAppState>({} as WhiteBoardAppState)
