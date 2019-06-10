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

  function findById(id) {
    store.items.find(id);
  }

  function addItem(name) {
    try { 
      Item.validateName(name); 
      const newItem = Item.create(name); 
      store.items.push(newItem); 
      render(); 
    }
    catch(e) { 
      console.log(`Cannot add item: ${e.message}`); 
    } 
  }

  function findAndToggleChecked(id) {
    const newFoundItem = store.items.find(item => item.id === id);
    newFoundItem.checked = !newFoundItem.checked;
  }

  function findAndUpdateName(id,newName) {
    try {
      const itemName = store.items.find(item => item.id === id);
      itemName.name = newName;
    } catch(e) {
      console.log(`'Cannot update name:' ${e.message}`);
    }
  }

  function findAndDelete(id) {
    const index = store.items.findIndex(item => item.id === id);
    items.splice(index, 1);
  }

  function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(val) {
    this.searchTerm = val;
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}());