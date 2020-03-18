function Solver() {
    this.goRight = new KeyboardEvent("keydown", {keyCode: 39});
    this.goLeft = new KeyboardEvent("keydown", {keyCode: 37});
    this.goUp = new KeyboardEvent("keydown", {keyCode: 38});
    this.goDown = new KeyboardEvent("keydown", {keyCode: 40});
}

Solver.prototype.MovesGenerator = function* () {
    while (true) {
        yield this.goRight;
        yield this.goUp;
        yield this.goLeft;
        yield this.goDown;
    }

};

Solver.prototype.moveLoop = function (movesGenerator) {

    window.setTimeout(() => {
        document.dispatchEvent(movesGenerator.next().value);
        this.moveLoop(movesGenerator);
    }, 1500);
};


Solver.prototype.autoPlay = function () {
// Start auto playing
    this.moveLoop(this.MovesGenerator());
//     window.setTimeout(() => {
//         document.dispatchEvent(this.goRight);
//         window.setTimeout(() => {
//             console.log('go left');
//             document.dispatchEvent(this.goLeft);
//         }, 1000);
//     }, 1000);
};
