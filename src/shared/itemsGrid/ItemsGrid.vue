<script setup>
import ItemCard from '@/entites/item/ui/itemCard/ItemCard.vue';
import { useItemStore } from '@/entites/item/ItemStore';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  isUserItems: {
    type: Boolean,
    default: false
  },
  isChosenItems: {
    type: Boolean,
    default: false
  }
});

const itemStore = useItemStore();

const handleItemClick = (item) => {
  if (props.isUserItems) {
    itemStore.addToChosenUserItems(item);
  } else {
    itemStore.addToChosenCommonItems(item);
  }
};

const handleItemRemove = (itemId) => {
  if (props.isUserItems) {
    itemStore.removeFromChosenUserItems(itemId);
  } else {
    itemStore.removeFromChosenCommonItems(itemId);
  }
}
</script>

<template>
  <div class="items-grid">
    <ItemCard v-for="item in items"
              :key="item.id"
              :item="item"
              @click=" isChosenItems ? handleItemRemove(item.id) : handleItemClick(item)"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 25px;
}
</style>