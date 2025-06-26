<script setup>
import ItemsGrid from '@/shared/itemsGrid/ItemsGrid.vue';

import { useItemStore } from '@/entites/item/ItemStore';
import { storeToRefs } from 'pinia';

const itemStore = useItemStore();
const { commonItems } = storeToRefs(itemStore);
</script>

<template>
  <section class="common-items">
    <h2 class="common-items__title">
      Общие вещи
    </h2>
    <ItemsGrid :items="commonItems" />
  </section>
</template>

<style scoped lang="scss">
.common-items {
  width: 50%;
}
</style>