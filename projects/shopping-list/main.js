import { $, $$ } from '../lib.js';
import Item from './Item.js';
import * as Items from './items.js';

Items.renderItems();

// add item
const addItemButton = $('.js-add-item-button');
const addItemInput = $('.js-add-item-input');
addItemButton.addEventListener('click', addItem);
addItemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

function addItem() {
  const itemName = addItemInput.value;

  if (!itemName) {
    popUpEnterItemMessage();
    return;
  }

  const item = new Item(itemName);
  Items.appendItem(item);
  addItemInput.value = '';
}

function popUpEnterItemMessage() {
  const enterItemMessage = $('.js-enter-item-message');
  enterItemMessage.classList.add('fade-in-out');
  enterItemMessage.addEventListener('animationend', () => {
    enterItemMessage.classList.remove('fade-in-out');
  });
}

// clear items
const clearItemsButton = $('.js-clear-items-button');
clearItemsButton.addEventListener('click', () => Items.clearItems());
