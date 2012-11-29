
# rework-mixins

  Rework CSS mixins

## Example

  Using all mixing:

```js
var rework = require('rework');
var mixins = require('rework-mixins');

var css = rework('some css here')
  .use(rework.mixin(mixins))
  .toString();
```

  Or specific mixing:

```js
var rework = require('rework');
var mixins = require('rework-mixins');

var css = rework('some css here')
  .use(rework.mixin({
    overflow: mixins.overflow
  }))
  .toString();
```

## overflow: ellipsis

  `mixins.overflow`:
  

## border-radius

  `mixins.border-radius`:

```css
border-radius: 5px
border-radius: 5px 10px
border-radius: top 5px
border-radius: top 5px left 10px
```

## License 

  MIT
