var ShapesDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
}
ShapesDancer.prototype = Object.create(Dancer.prototype);
ShapesDancer.prototype.constructor = ShapesDancer;

ShapesDancer.prototype.step = function(){
  this.$node.toggleClass('shape');
  Dancer.prototype.step.call(this);
};
