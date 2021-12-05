import {WhiteboardAppStateProps} from "../index";
import {makeAutoObservable} from "mobx";

interface ShapeStateProps {
  points: Array<Array<number>> | undefined
  drawActive: boolean
}

export class ShapeState implements ShapeStateProps {
  private _points: Array<Array<number>> | undefined
  private _drawActive = false

  constructor(public rootState: WhiteboardAppStateProps) {
    makeAutoObservable(this)
  }

  addPoint(clientX: number, clientY: number) {
    if (this._points) {
      this._points.push([clientX, clientY])
    } else {
      this._points = [[clientX, clientY]]
    }
  }

  setDrawActive(value: boolean) {
    this._drawActive = value
  }


  get points(): Array<Array<number>> | undefined {
    return this._points;
  }

  get drawActive(): boolean {
    return this._drawActive;
  }
}
