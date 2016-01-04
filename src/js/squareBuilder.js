function buildSquares() {
    const SQUARE_COUNT = 220;
    const SPEEDS = 10;
    const SPEED_CLASS_PREFIX = 'speed_';
    const SQUARE_CLASS = 'square';
    const SQUARE_ELEMENT = 'div';

    for (var i = 0; i < SQUARE_COUNT; i++) {
        buildSquare();
    }

    function buildSquare() {
        var speedClassNum = Math.floor(Math.random() * SPEEDS) + 1;
        var speedClass = SPEED_CLASS_PREFIX + speedClassNum;

        var newSquare = document.createElement(SQUARE_ELEMENT);
        newSquare.className = speedClass + ' ' + SQUARE_CLASS;
        document.body.appendChild(newSquare);
    }
}