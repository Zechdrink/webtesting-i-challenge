module.exports = {
  success,
  // fail,
  repair,
  // get,
 
};

function repair(item) {
  if(0 <= item.durability <= 100 && Number.isInteger(item.durability)){
    newItem = item;
    newItem.durability = 100;
    return newItem;
  }
  return item;
}

function success(item) {
  if(0 < item.enhancement < 20 && Number.isInteger(item.enhancement)){
    newItem = item;
    newItem.enhancement += 1;
    return newItem;
  }
  return item ;
}

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 
// (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  if(item.enhancement)
  return { ...item };
}

// function get(item) {
//   return { ...item };
// }
