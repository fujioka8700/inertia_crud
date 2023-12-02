class Point {
    protected x: number = 0;
    y: number = 0;

    getX() {
        return this.x;
    }
}

class PointX extends Point {
    getPointX() {
        return this.x;
    }
}

const point = new PointX();
// console.log(point.x, point.y);
// 0 0

console.log(point.getX());
