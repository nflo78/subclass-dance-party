var makeColorDancer = function(left, top, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.counter = 0;
  this.$node.append("<img class='colorDancerGif' src='./assets/dancinglisa.gif' />'");
  this.$node.addClass("colorDancer");
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;
makeColorDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  var colors = ["blue", "orange", "yellow", "green", "red"];
  var newColor = colors[this.counter % colors.length];
  this.$node.css({"border-color": newColor});
  this.counter++;
};