export type ShapeColorType = "black" | "red" | "yellow"

export class BaseShapeModel {
  private _points: number[][] | undefined
  private _strokeSize = 8
  private _color: ShapeColorType = 'black'
  private _maxPoint = 0
  private _minPoint = 0


  constructor(points: number[][] | undefined) {
    this._points = points;
  }

  public addNewPoint(x: number, y: number): void {
    if (this._points) {
      this._points.push([x, y])
    } else {
      this._points = [[x, y]]
    }
  }

  public changeStoreSize(size: number) {
    this._strokeSize = size
  }

  public changeColor(color: ShapeColorType): void {
    this._color = color
  }

  public reset() {
    this._points = undefined
    this._strokeSize = 8
    this._color = 'black'
    this._maxPoint = 0
    this._minPoint = 0
  }

  public getPoints() {
    return this._points
  }


  get points(): number[][] | undefined {
    return this._points;
  }

  get strokeSize(): number {
    return this._strokeSize;
  }

  get color(): ShapeColorType {
    return this._color;
  }

  get maxPoint(): number {
    return this._maxPoint;
  }

  get minPoint(): number {
    return this._minPoint;
  }

}
