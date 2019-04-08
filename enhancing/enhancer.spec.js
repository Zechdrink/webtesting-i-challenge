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

    test('Should increase enhancement by 1 if enhancement is below 20', () => {

        anotherItem = {
            name: 'axe',
            enhancement: 1,
            durability: 99
        }

        expect(enhancer.success(anotherItem)).toEqual({
            name: 'axe',
            enhancement: 2,
            durability: 99,
        })
        
        console.log(anotherItem);

    })

})


// describe('fail', () => {

//     test('Decreases durability and enhancements for items depending on enhancement level', ()=>{

//         rareItem = {
//             name: 'Broom',
//             enhancement: 17,
//             durability: 85
//         }

//         expect(enhancer.fail(rareitem)).toEqual({
//             name: 'Broom',
//             enhancement: 16,
//             durability: 75
//         })

//         console.log(rareItem);
        
//     })

// })
