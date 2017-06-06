$(document).ready(function() {
  window.dancers = [];

  $('.quantifier').attr('value', '50');
  $('.quantifier').attr('min','1');
  $('.quantifier').attr('step', '10');
  $('.moveTime').attr('value', '2001');
  $('.moveTime').attr('min', '500');
  $('.moveTime').attr('step', '500');

  $('.addDancerButton').on('click', function(event) {
    var quantifier = 1.0 * $('.quantifier')[0].value;
    for (var i = 0; i < quantifier; i++) {

      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      var yPosition = $('body').height() * Math.random();
      var xPosition = $('body').width() * Math.random();
      var halfPeriod = Math.random() * 700 + 300;

      // make a dancer with a random position
      if (dancerMakerFunctionName === 'makeBlinkyDancer') {
        var dancer = new BlinkyDancer(yPosition, xPosition, halfPeriod);
      }
      if (dancerMakerFunctionName === 'makeShapesDancer') {
        var dancer = new ShapesDancer(yPosition, xPosition, halfPeriod);
      }
      if (dancerMakerFunctionName === 'makeColorDancer') {
        var dancer = new ColorDancer(yPosition, xPosition, halfPeriod);
      }
      $('body').append(dancer.$node);
    }
  });

  $('.lineUpDancersButton').on('click', function() {
    var moveTime = 1.0 * $('.moveTime')[0].value;
    lineUpDancers(moveTime);
  });
});
