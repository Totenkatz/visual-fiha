'use strict';
var LayerState = require('./../state');
var P5LayerState = LayerState.types.p5 = LayerState.extend({
  props: {
    text: ['string', false, null]
  }
});
module.exports = P5LayerState;