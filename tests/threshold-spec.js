const expect = require('chai').expect;
const transform = require('../src/threshold');

describe('threshold', function() {
    it('should apply transformation and return as imageData', function() {
        const data = [
            193,
            219,
            242,
            255,
            193,
            219,
            242,
            255
        ];

        const expectedData = [
            255,
            255,
            255,
            255,
            193,
            219,
            242,
            255
        ];

        transform(data, 4, 5);

        expect(data).to.deep.equal(expectedData);
    });
});
