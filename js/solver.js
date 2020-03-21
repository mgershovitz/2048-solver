const goUp = 0;
const goRight = 1;
const goDown = 2;
const goLeft = 3;

basicStrategyGenerator = function* () {
    while (true) {
        yield goRight;
        yield goUp;
        yield goLeft;
        yield goDown;
    }
};

function Solver() {
    this.strategyGenerator = basicStrategyGenerator();
}

Solver.prototype.getNextMove = function () {
    return this.strategyGenerator.next().value;
};