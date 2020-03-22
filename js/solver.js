const goUp = 0;
const goRight = 1;
const goDown = 2;
const goLeft = 3;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

basicStrategyGenerator = function* () {
    while (true) {
        yield goRight;
        yield goUp;
        yield goLeft;
        yield goDown;
    }
};

randomStrategyGenerator = function* () {
    while (true) {
        yield getRandomInt(4);
    }
};

function Solver() {
    this.strategyGenerator = basicStrategyGenerator();
    this.solverIntervalId = null;
}

Solver.prototype.changeStrategy = function (strategy) {
    switch (strategy) {
        case "basic":
            this.strategyGenerator = basicStrategyGenerator();
            break;
        case "random":
            this.strategyGenerator = randomStrategyGenerator();
            break;
    }
};

Solver.prototype.getNextMove = function () {
    return this.strategyGenerator.next().value;
};

Solver.prototype.clearInterval = function () {
    //Clear old interval and start a new one
    if (this.solverIntervalId) {
        window.clearInterval(this.solverIntervalId);
    }
};