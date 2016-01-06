function buildSquares() {
    const SQUARE_PADDING = 20, SQUARE_COUNT = 200 + SQUARE_PADDING;
    const SPEEDS = 10;
    const SPEED_CLASS_PREFIX = 'speed_';
    const SQUARE_CLASS = 'square', SQUARE_CLASS_SELECTOR = '.' + SQUARE_CLASS;
    const SQUARE_ELEMENT = 'div';

    for (var i = 0; i < SQUARE_COUNT; i++) {
        buildSquare();
    }
    assignFocus();

    function buildSquare() {
        var speedClassNum = randomNumber(SPEEDS) + 1;
        var speedClass = SPEED_CLASS_PREFIX + speedClassNum;

        var newSquare = document.createElement(SQUARE_ELEMENT);
        newSquare.className = speedClass + ' ' + SQUARE_CLASS;
        newSquare.setAttribute('tabindex', '-1');
        document.body.appendChild(newSquare);
    }

    function assignFocus() {
        var randomSquareIdx = randomNumber(SQUARE_COUNT - SQUARE_PADDING);
        var randomSquare = document.querySelectorAll(SQUARE_CLASS_SELECTOR)[randomSquareIdx];
        randomSquare.focus();
    }

    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
}