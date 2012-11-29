
/**
 * Positions.
 */

var positions = {
  top: true,
  left: true,
  right: true,
  buttom: true
};

/**
 * absolute: top left
 * absolute: top 5px left 5px
 */

module.exports = function(str){
  var val;
  var pos;
  var ret = {};
  var vals = str.split(/\s+/);

  ret.position = 'absolute';

  for (var i = 0; i < vals.length; ++i) {
    val = vals[i];
    if (positions[val]) {
      pos = val;
      ret[pos] = 0;
    } else {
      ret[pos] = val;
    }
  }

  return ret;
};