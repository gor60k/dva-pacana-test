<script setup>
import ItemsGrid from '@/shared/itemsGrid/ItemsGrid.vue';

import { useItemStore } from '@/entites/item/ItemStore';
import { storeToRefs } from 'pinia';

const itemStore = useItemStore();
const { userItems } = storeToRefs(itemStore);
</script>

<template>
  <section class="user-items">
    <h2 class="user-items__title">
      Вещи пользователя
    </h2>
    <ItemsGrid
      :items="userItems"
      :is-user-items="true"
    />
  </section>
</template>

<style scoped lang="scss">
.user-items {
  width: 50%;
}
</style>