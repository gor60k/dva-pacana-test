import { defineStore } from 'pinia';
import { Item } from '@/entites/item/types';

export const useItemStore = defineStore('item', {
  state: () => ({
    userItems: [
      {
        "id": 1,
        "name": "Shoes 1"
      },
      {
        "id": 2,
        "name": "Shoes 2"
      },
      {
        "id": 3,
        "name": "Shoes 3"
      },
      {
        "id": 4,
        "name": "Shoes 4"
      },
      {
        "id": 5,
        "name": "T-shirt 1"
      },
      {
        "id": 6,
        "name": "T-shirt 2"
      },
      {
        "id": 7,
        "name": "T-shirt 3"
      },
      {
        "id": 8,
        "name": "T-shirt 4"
      }
    ],
    commonItems: [
      {
        "id": 11,
        "name": "Jacket 1"
      },
      {
        "id": 12,
        "name": "Jacket 2"
      },
      {
        "id": 13,
        "name": "Jacket 3"
      },
      {
        "id": 14,
        "name": "Jacket 4"
      },
      {
        "id": 15,
        "name": "Hoodie 1"
      },
      {
        "id": 16,
        "name": "Hoodie 2"
      },
      {
        "id": 17,
        "name": "Hoodie 3"
      },
      {
        "id": 18,
        "name": "Hoodie 4"
      }
    ],
    chosenUserItems: [],
    chosenCommonItems: []
  }),
  actions: {
    addToChosenUserItems(item: Item) {
      if (!this.chosenUserItems.some(i => i.id === item.id) && this.chosenUserItems.length <=5) {
        this.chosenUserItems.push(item);
      }
    },
    addToChosenCommonItems(item: Item) {
      if (!this.chosenCommonItems.some(i => i.id === item.id) && this.chosenCommonItems.length <= 0 ) {
        this.chosenCommonItems.push(item);
      }
    },
    removeFromChosenUserItems(itemId: number) {
      this.chosenUserItems = this.chosenUserItems.filter(item => item.id !== itemId);
    },
    removeFromChosenCommonItems(itemId: number) {
      this.chosenCommonItems = this.chosenCommonItems.filter(item => item.id !== itemId);
    }
  }
});
