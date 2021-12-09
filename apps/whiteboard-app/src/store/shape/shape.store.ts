import {WhiteboardAppStateProps} from "../index";
import {BaseShapeModel} from "../../model";
import {makeAutoObservable} from "mobx";

export class ShapeState {
  private _shapes: BaseShapeModel[] | undefined = undefined
  private _drawingPoints: number[][] | undefined
  private _drawActive = false
  private _currentShape: BaseShapeModel | undefined

  constructor(public rootState: WhiteboardAppStateProps) {
    makeAutoObservable(this)
  }

  public addNewShape() {
    if (this._drawingPoints && this._currentShape) {
      console.log("Current Shape", this._currentShape)
      if (this._shapes) {
        this._shapes.push(this._currentShape)
      } else {
        this._shapes = [this._currentShape]
      }
      this.reset()
    }
  }

  addNewPoint(x: number, y: number) {
    if (this._drawingPoints) {
      this._drawingPoints.push([x, y])
      this.addPointToObject(x, y)
    } else {
      this._drawingPoints = [[x, y]]
      this.addPointToObject(x, y)
    }
  }

  addPointToObject(x: number, y: number) {
    if (this._currentShape) {
      this._currentShape.addNewPoint(x, y)
    } else {
      this._currentShape = new BaseShapeModel([[x, y]])
    }
  }

  reset() {
    this._drawingPoints = undefined
    this._currentShape = undefined
  }

  get shapes(): BaseShapeModel[] | undefined {
    return this._shapes;
  }

  get drawingPoints(): number[][] | undefined {
    return this._drawingPoints;
  }

  get drawActive(): boolean {
    return this._drawActive;
  }

  public setDrawActive(value: boolean) {
    this._drawActive = value
  }
}
