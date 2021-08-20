
let userCart = new Cart();

let items_arr = []


function updateUI(){

    let main_view = document.getElementById("cart")
    main_view.innerHTML = ""
    let items = userCart.getItems();

    items.forEach((item) => {
        let cart_view  = document.createElement("div");
        cart_view.id = `item${items.id}`
        cart_view.innerHTML = `
        <p>${item.name}</p>
        <hr>
        <small>${item.price}</small>
        `
        cart_view.classList.add("card")
        items_arr.push(cart_view)
        main_view.appendChild(cart_view)
    })



}

function addToCart(event){
    event.preventDefault();

    let view = event.target
     
   var _item = getItem(view.id)

    let response = userCart.addItem(new Item(_item.id,_item.name, parseInt(_item.price)))
    console.log(response)
    updateUI()
}