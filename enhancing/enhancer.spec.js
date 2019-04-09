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
        
        console.log("anotherItem", anotherItem);

    })

})


describe('fail', () => {

    test('Decreases durability and enhancements for items depending on enhancement level', ()=>{

        rareItem = {
            name: 'Broom',
            enhancement: 12,
            durability: 85
        }

        uncommonItem = {
            name: 'Ray Gun',
            enhancement: 17,
            durability: 100
        }

        commonItem = {
            name: 'Ray Machine Gun',
            enhancement: 16,
            durability: 90
        }

        expect(enhancer.fail(rareItem)).toEqual({
            name: 'Broom',
            enhancement: 12,
            durability: 80
        })

        expect(enhancer.fail(uncommonItem)).toEqual({
            name: 'Ray Gun',
            enhancement: 16,
            durability: 90
        })

        expect(enhancer.fail(commonItem)).toEqual({
            name: 'Ray Machine Gun',
            enhancement: 16,
            durability: 80
        })

        console.log("rareItem", rareItem);
        console.log("uncommonItem", uncommonItem);
        console.log("commonItem", commonItem);
        
    })

})
