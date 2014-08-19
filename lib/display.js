
/**
 * display: [flex|inline-block]
 */

module.exports = function(type) {
  if ('flex' == type || 'box' == type) {
    return {
      'display': [
        '-webkit-box',
        '-moz-box',
        '-ms-flexbox',
        '-webkit-flex',
        'flex'
      ]
    }
  }

  if ('inline-block' == type) {
    return {
      'display': 'inline-block',
      'zoom': '1',
      '*display': 'inline'
    }
  }

  return {
    'display': type
  };
};
