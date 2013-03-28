function newPoint(xCoord, yCoord) {
    return {
        X: xCoord,
        Y: yCoord,
        toString: function getPoint() {
            return "Point (" + this.X + ", " + this.Y + ")";
        }
    }
}

function newLine(firstPoint, secondPoint) {
    return {
        FirstPoint: firstPoint,
        SecondPoint: secondPoint,
        Tangent: ((firstPoint.Y - secondPoint.Y) / (firstPoint.X - secondPoint.X)),
        toString: function getLine() {
            return "Line (" + this.FirstPoint.toString() + ", " + this.SecondPoint.toString() + ")";
        }
    }
}

function calculateDistance(firstPoint, secondPoint) {
    var xDist = Math.abs(firstPoint.X - secondPoint.X);
    var yDist = Math.abs(firstPoint.Y - secondPoint.Y);
    return Math.sqrt(xDist * xDist + yDist * yDist);
}

function checkIfTriangle(firstLine, secondLine, thirdLine) {
    if (firstLine.Tangent === secondLine.Tangent || secondLine.Tangent === thirdLine.Tangent || thirdLine.Tangent === firstLine.Tangent) {
        return false;
    } else return true;
}