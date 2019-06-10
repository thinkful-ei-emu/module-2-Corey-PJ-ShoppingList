/* eslint-disable no-console */
/* eslint-disable no-undef */

'use strict';

const store = (function () {
    
  const items = [
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    store.items.find(id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      const addNewItem = Item.create(name);
      this.items.push(addNewItem);
      render();
    } catch(e) {
      console.log(`Cannot add item: ${e.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    const newFoundItem = this.findById(id);
    newFoundItem.checked = !newFoundItem.checked;
    console.log(newFoundItem);
  };

  const findAndUpdateName = function(id,newName) {
    try {
      validateName(name);
      let found = findById(id);
      found.name = newName;
    } catch(e) {
      console.log(`'Cannot update name:' ${e.message}`);
    }
  };

  const findAndDelete = function(id) {
    const index = store.items.findIndex(function(item) {
      item.id === id;
    });
    store.items.splice(index, 1);
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());