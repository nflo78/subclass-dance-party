var makeSquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass("squareDancer");

};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node
    .animate({
    // "left": "+=50px",
    // "top": "+=50px",
      "rotate": "+=720deg",
      "height": "+=5px",
      "width": "+=5px"
    }, "slow")
    .animate({
      "left": "+=50px"
    }, "slow")
    .animate({
      "top": "+=50px"
    }, "slow")
    .animate({
      "left": `-=50px`
      // "top": "+=50px",
    }, "slow")
    .animate({
      // "left": "+=50px",
      "top": `-=50px`
    }, "slow");

};