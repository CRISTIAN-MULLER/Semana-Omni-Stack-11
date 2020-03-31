const st = require ('supertest');
const app = require ('../../src/app')
const con = require ('../../src/database/connection')

describe('ONG',() => {
    beforeEach(async() =>{
        await con.migrate.rollback();
        await con.migrate.latest();
    });

    afterAll (async() =>{
        await con.destroy();
    });

    it('Should be able to create a ONG', async () =>{
    const response = await st(app)
    .post('/ongs')
    .send({
    name: "opa",
	email: "muller.cristian@outlook.com",
	whatsapp:"27995181848",
	city: "Vitória",
	uf: "ES"
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});