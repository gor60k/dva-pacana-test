<script setup>
import ItemsGrid from '@/shared/itemsGrid/ItemsGrid.vue';

import { useItemStore } from '@/entites/item/ItemStore';
import { storeToRefs } from 'pinia';

const itemStore = useItemStore();
const { chosenCommonItems } = storeToRefs(itemStore);
</script>

<template>
  <section class="chosen-common__item">
    <h2 class="chosen-common__item-title">
      Выбранная вещь
    </h2>
    <ItemsGrid
      :items="chosenCommonItems"
      :is-chosen-items="true"
    />
  </section>
</template>

<style scoped lang="scss">
.chosen-common__item {
  width: 50%;
}

.items-grid {
  grid-template-columns: repeat(1, 1fr);
}
</style>