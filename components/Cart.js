class Cart {
  cartList = [];
  constructor() {}

  /**
   * @property {Item} item an item object
   */
  addItem(item) {
    if (typeof item == "object") {
      this.cartList.push(item);
      return "Added item to cart";
    } else {
      throw Error("Invalid item type");
    }
  }

  getItems() {
    return this.cartList;
  }

  getItem(itemID) {
    let itemList = this.cartList.map((item) => {
      if (item.id === itemID) {
        return item;
      }
    });

    if (itemList.length > 0) {
      return itemList[0];
    } else {
      return null;
    }
  }
}
