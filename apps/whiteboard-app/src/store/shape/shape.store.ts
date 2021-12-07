import {WhiteboardAppStateProps} from "../index";
import {makeAutoObservable} from "mobx";
import {ShapeModel} from "../../model";

interface ShapeStateProps {
  points: Array<Array<number>> | undefined
  drawActive: boolean
  shapes?: ShapeModel[]
}

export class ShapeState implements ShapeStateProps {
  private _points: Array<Array<number>> | undefined
  private _drawActive = false
  private _shapes: ShapeModel[] | undefined = undefined

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

  addToShape() {
    if (this.points) {
      this.appendShape({
        points: this.points,
        strokeSize: 8
      })
      this._points = undefined
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

  get shapes(): ShapeModel[] | undefined {
    return this._shapes;
  }

  private appendShape(shape: ShapeModel) {
    if (this.shapes) {
      this.shapes?.push(shape)
    } else {
      this._shapes = [shape]
    }
  }
}
