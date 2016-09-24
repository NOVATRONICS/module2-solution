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
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var cart = this;

      cart.items = ShoppingListCheckOffService.getCartItems();

      cart.removeItem = function (item) {
        ShoppingListCheckOffService.removeItem(item);
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
    },
    {
      name: 'banana',
      quantity: 5
    },
    {
      name: 'orange',
      quantity: 3
    },
    {
      name: 'apples',
      quantity: 2
    },
  ];
  // List of cart items
  var cart = [];

  service.buyItem = function (item) {
    cart.push( items.splice(items.indexOf(item), 1)[0] );
  };

  service.removeItem = function (item) {
    items.push( cart.splice(cart.indexOf(item), 1)[0] );
  };

  service.getListItems = function () {
    return items;
  };

  service.getCartItems = function () {
    return cart;
  };
}



})();
