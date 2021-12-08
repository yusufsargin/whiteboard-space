enum APP_MODE {
  DRAWING_MODE=0,
  SELECTION_MODE
}

interface BaseSettings {
  appMode:APP_MODE;
}

export abstract class Settings implements BaseSettings{
  /**
   * For App Mode
   */
  appMode:APP_MODE = APP_MODE.SELECTION_MODE;

}
