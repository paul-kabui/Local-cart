let items = [
  {
    id: 1,
    name: "Honda Civic TypeR",
    price: 37000,
  },
  {
    id: 2,
    name: "BMW M3 350i",
    price: 34000,
  },
];

function getItem(id){
  var item = null
  for (let index = 0; index < items.length; index++) {
    
    if(parseInt(id) === items[index].id){
      item = items[index]
    }
    
  }
  return item

}