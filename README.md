# exif-async

> Get EXIF data from JPG files using async/await functions or promises.
A node.js wrapper around [exif](https://www.npmjs.com/package/exif) module.

## Installation

```bash
npm i -D exif-async
```

## Usage
Import (or require) default function
```javascript
import getExif from 'exif-async';
```

use async/await
```javascript
(async () => {
  try {
    const exif = await getExif('./photo_exif.jpg');
    console.log(exif);
  } catch (err) {
    console.log(err);
  }
})();
```

or promises
```javascript
getExif('./photo_exif.jpg')
  .then((exif) => { console.log(exif); })
  .catch((err) => { console.log(err); });
```

## License
MIT

