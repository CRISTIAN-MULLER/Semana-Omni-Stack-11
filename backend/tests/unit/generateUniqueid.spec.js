const generateUniqueid = require ('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Should generate a unique ID', () => {
        const id =generateUniqueid()
        expect(id).toHaveLength(8);
    })
});