const expect = require('expect.js');
const getExif = require('../index');

const PHOTO_WITH_EXIF = './test/photo_exif.jpg';
const PHOTO_WITHOUT_EXIF = './test/photo_no_exif.jpg';

describe('exif-async', () => {
  describe('when photo contains EXIF data', () => {
    it('should return EXIF data', async () => {
      const exif = await getExif(PHOTO_WITH_EXIF);
      expect(exif.image.hasOwnProperty('Make')).to.be.ok();
      expect(exif.exif.hasOwnProperty('ISO')).to.be.ok();
    });
  });

  describe('when photo NOT contains EXIF data', () => {
    it('should return error code', async () => {
      try {
        await getExif(PHOTO_WITHOUT_EXIF);
      } catch (err) {
        expect(err.code).to.equal('NO_EXIF_SEGMENT');
        expect(err.source).to.equal(`File: ${PHOTO_WITHOUT_EXIF}`);
      }
    });
  });
});