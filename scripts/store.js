/* eslint-disable no-undef */

'use strict';

const store = (function () {
  const foo = 'bar';
    
  const store = {
    items: [
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };

  return {
    items,
    hideCheckedItems,
    searchTerm
  };
}());
console.log(store);
console.log(foo);