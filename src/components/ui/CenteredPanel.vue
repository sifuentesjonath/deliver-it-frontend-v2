<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
  noTopPadding?: boolean;
}>();

</script>

<template>
  <div class="d-flex w-100 h-100 justify-content-center">
    <section
      class="w-75 d-flex flex-column justify-content-center align-items-center"
    >
      <header>
        <h2
          class="signin-title
            mb-5"
        >
          {{ title }}
        </h2>
      </header>
      <section
        class="signin-panel
          w-25"
        :class="{ notoppad: noTopPadding }"
      >
        <slot />
      </section>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .panel-holder {
    text-align: center;
  }
  .signin-title {
    text-align: center;
    color: #171e2d;
    font-size: 24px;
    font-weight: 600;
  }
  .signin-panel {
    padding: 1.5rem;
    min-width: 25rem;
    border-radius: 0.25rem;
    background-color: #fff;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(23,30,46,.1);
  }

  .notoppad {
    padding: 0rem 1.5rem 1.5rem 1.5rem !important;
  }
</style>
