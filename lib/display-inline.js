
/**
 * display: inline-block
 */

module.exports = function(type) {
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
}
