<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div class="item-card" @click="handleClick">
    <div class="item-card__image"></div>
    <div class="item-card__info">
      <div class="item-card__title">
        {{ item.name }}
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &__image {
    width: 100%;
    height: 220px;
    background: $base-color;
    background: $base-gradient;
  }

  &__info {
    width: 100%;
    padding: 16px;
    text-align: center;
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    color: $base-black;
    letter-spacing: -0.2px;
    line-height: 1.2;
  }
}
</style>