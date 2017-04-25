const getExif = require('../index');

(async () => {
  try {
    const data = await getExif(process.argv[2]);
    console.log(data)
  } catch (err) {
    console.log(err)
  }
})();

