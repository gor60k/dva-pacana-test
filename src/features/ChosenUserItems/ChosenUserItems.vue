<script setup>
import ItemsGrid from '@/shared/itemsGrid/ItemsGrid.vue';

import { useItemStore } from '@/entites/item/ItemStore';
import { storeToRefs } from 'pinia';

const itemStore = useItemStore();
const { chosenUserItems } = storeToRefs(itemStore);
</script>

<template>
  <section class="chosen-user__items">
    <h2 class="chosen-user__items-title">
      Выбранные вещи пользователя (1 - 6)
    </h2>
    <ItemsGrid
      :items="chosenUserItems"
      :is-chosen-items="true"
    />
  </section>
</template>

<style scoped lang="scss">
.chosen-user__items {
  width: 50%;
}
</style>