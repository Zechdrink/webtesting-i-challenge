const enhancer = require('./enhancer.js');
// test away!

describe('repair', () => {
    
    test('Should return a new item with the durability restored to 100', () => {
        //arrange
        item = {
            name: 'sword',
            enhancement: 15,
            durability: 5
        }
        //assert
        expect(enhancer.repair(item)).toEqual({ 
        name: 'sword',
        enhancement: 15,
        durability: 100
    })
    })

})

describe('success', () => {

    test('Should increase enhancement by 1 if enhancement is below 20')


})



