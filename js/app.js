(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
      var list = this;

      list.items = ShoppingListCheckOffService.getListItems();

      list.buyItem = function (item) {
        ShoppingListCheckOffService.buyItem(item);
      };

      list.isEmpty = function () {
        return !(list.items.length);
      };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var cart = this;

      cart.items = ShoppingListCheckOffService.getCartItems();

      cart.isEmpty = function () {
        return !(cart.items.length);
      };
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var items = [
    {
      name: 'cookies',
      quantity : 10
    },
    {
      name: 'chips',
      quantity: 20
    }
  ];
  // List of cart items
  var cart = [];

  service.buyItem = function (item) {
    cart.push(item);
    items.splice(items.indexOf(item),1);
  };

  service.getListItems = function () {
    return items;
  };

  service.getCartItems = function () {
    return cart;
  };
}



})();
