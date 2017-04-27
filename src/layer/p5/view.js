'use strict';
var assign = require('lodash.assign');
var LayerView = require('./../view');
var P5LayerView = LayerView.types.p5 = LayerView.extend({
  autoRender: true,

  template: function() {
    return '<div class="layer-txt" id="' + this.model.getId() + '" view-id="' + this.cid + '"><div class="text"></div></div>';
  },

  bindings: assign(LayerView.prototype.bindings, {
    'model.text': '.text'
  })
});
module.exports = P5LayerView;