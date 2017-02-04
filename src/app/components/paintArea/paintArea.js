(function(angular) {
    "use strict";

    function PaintAreaController() {

    }

    angular.module('app')

})(window.angular);

var SimplePainter = (function() {

    var canvas;
    var isPainting;
    var mousePosition;
    var canvasContext;

    function SimplePainter(canvasId) {
        canvas = document.getElementById(canvasId);
        canvasContext = canvas.getContext('2d');

        canvasContext.lineWidth = 4;
        canvasContext.lineJoin = 'round';
        canvasContext.lineCap = 'round';
        canvasContext.strokeStyle = 'darkblue';

        mousePosition = {
            x: 0,
            y: 0
        };

        sPainting = false;
    }

    function onStartStopPaint(e) {
        if(isPainting === true) {
            isPainting = false;
            canvas.removeEventListener('mousemove', onPaint);
            return;
        }

        isPainting = true;
        canvasContext.beginPath();
        canvasContext.moveTo(mousePosition.x, mousePosition.y);

        canvas.addEventListener('mousemove', onPaint.bind(this), false);
    }

    function onMousePosCalculate(e) {
        mousePosition.x = e.pageX - canvas.offsetLeft;
        mousePosition.y = e.pageY - canvas.offsetTop;
    }

    function onPaint(e) {
        canvasContext.lineTo(mousePosition.x, mousePosition.y);
        canvasContext.stroke();
    }

    SimplePainter.prototype.run = function() {
        canvas.addEventListener('mousemove', onMousePosCalculate.bind(this), false);
        canvas.addEventListener('mousedown', onStartStopPaint.bind(this), false);
    };

    return SimplePainter;

})();

var simplePainter = new SimplePainter('paintArea');
simplePainter.run();
