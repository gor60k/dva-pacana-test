<script setup>

import UserItems from '@/features/UserItems/UserItems.vue';
import CommonItems from '@/features/CommonItems/CommonItems.vue';
import ChosenUserItems from '@/features/ChosenUserItems/ChosenUserItems.vue';
import ChosenCommonItem from '@/features/ChosenCommonItem/ChosenCommonItem.vue';
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="top-sections">
        <ChosenUserItems />
        <ChosenCommonItem />
      </div>
      <div class="bottom-sections">
        <UserItems />
        <CommonItems />
      </div>
    </div>
  </main>
</template>

<style lang="scss">

#app, main, wrapper {
  width: 100%;
  height: 100%;
}

.wrapper {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.top-sections, .bottom-sections {
  width: 100%;
  height: 100%;
  display: flex;
}

.bottom-sections {
  gap: 20px;
}
</style>
