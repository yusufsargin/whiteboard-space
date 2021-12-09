import {makeAutoObservable} from "mobx";
import React from "react";
import {ShapeState} from "./shape";
import {AppMode} from "../model";
import {SettingsStore} from "./settings/settings.store";

export interface WhiteboardAppStateProps {
  shapeState: ShapeState | undefined
  settingsState: SettingsStore | undefined
  appMode: AppMode
}

class WhiteBoardAppState implements WhiteboardAppStateProps {
  shapeState: ShapeState | undefined = undefined
  settingsState: SettingsStore | undefined = undefined
  appMode: AppMode = AppMode.DRAW_MODE

  constructor() {
    this.shapeState = new ShapeState(this)
    this.settingsState = new SettingsStore(this)
    makeAutoObservable(this)
  }

  setAppMode(appMode: AppMode) {
    console.log(this.appMode)
    this.appMode = appMode
  }
}

export const WhiteBoardState = new WhiteBoardAppState()
export const WhiteboardAppContext = React.createContext<WhiteBoardAppState>({} as WhiteBoardAppState)
