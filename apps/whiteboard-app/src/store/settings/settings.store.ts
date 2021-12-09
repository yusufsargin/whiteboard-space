import {APP_MODE} from "../../types";
import {makeAutoObservable} from "mobx";
import {WhiteboardAppStateProps} from "../index";

export class SettingsStore {
  /**
   * For App Mode
   */
  private appMode: APP_MODE = APP_MODE.SELECTION_MODE;

  constructor(public rootState: WhiteboardAppStateProps) {
    makeAutoObservable(this)
  }

  /**
   * Change App mode
   * @param mode {APP_MODE}
   */
  public changeAppMode(mode: APP_MODE) {
    this.appMode = mode
  }

  public getAppMode() {
    return this.appMode
  }
}
