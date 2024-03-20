// import request from 'supertest';

// import { StatusCodes } from 'http-status-codes';
// import { App } from '../../Server';

// describe('Create Product', () => {

//   it('should create a product', async () => {
//     const mock = {
//       name: 'calça',
//       stock: 50,
//       price: 80.99,
//       description: 'calça para homens elegantes',
//       productImage: 'testando.jpeg'
//     };

//     const response = await request(App)
//       .post('/produtos')
//       .send(mock);

//     expect(response.status).toBe(StatusCodes.CREATED);
//     expect(response.body).toHaveProperty('message', 'Product created');
//     expect(response.body).toHaveProperty('id');

//   });


// });