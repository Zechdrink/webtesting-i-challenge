module.exports = {
  // succeed,
  // fail,
  // repair,
  // get,
  repair,
};

function repair(item) {
  if(0 <= item.durability <= 100 && Number.isInteger(item.durability)){
    newItem = item;
    newItem.durability = 100;
    return newItem;
  }
  return item;
}

// function succeed(item) {
//   return { ...item };
// }

// function fail(item) {
//   return { ...item };
// }

// function get(item) {
//   return { ...item };
// }
