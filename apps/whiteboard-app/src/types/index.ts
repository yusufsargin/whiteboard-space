export enum APP_MODE {
  DRAWING_MODE = 0,
  SELECTION_MODE
}


export abstract class BaseSettings {
  /**
   * For App Mode
   */
  appMode: APP_MODE = APP_MODE.SELECTION_MODE;

  /**
   * Change App mode
   * @param mode {APP_MODE}
   */
  public changeAppMode(mode: APP_MODE) {
    this.appMode = mode
  }
}
