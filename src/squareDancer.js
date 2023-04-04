var makeSquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var fadeTime = Math.random * this.timeBetweenSteps;
  // this.$node.fadeToggle(fadeTime);
  this.$node.animate({
    // "left": "+=50px",
    // "top": "+=50px",
    "rotate": "+=720deg",
    "height": "+=5px",
    "width": "+=5px"
  }, "slow");
  this.$node.animate({
    "left": "+=50px"
  }, "slow");
  this.$node.animate({
    "top": "+=50px"
  }, "slow");
  this.$node.animate({
    "left": `-=50px`
    // "top": "+=50px",
  }, "slow");
  this.$node.animate({
    // "left": "+=50px",
    "top": `-=50px`
  }, "slow");
};