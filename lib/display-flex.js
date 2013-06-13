
/**
 * display: flex
 */

module.exports = function(type) {
  if ('flex' == type) {
    return {
      display: [
        '-webkit-box',
        '-moz-box',
        '-ms-flexbox',
        '-webkit-flex',
        'flex'
      ]
    }
  }

  return {
    display: type
  };
};
