<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
	label?: string;
	name?: string;
	id?: string;
	required?: boolean;
	checked?: boolean;
	value?: boolean;
	disabled?: boolean;
}>();
</script>

<template>
	<label class="custom-control custom-checkbox">
		<!-- <input
      type="checkbox"
      class="custom-control-input"
      :disabled="disabled"
      :checked="value"
      @change="$emit('update:fieldInput', $event.target.checked)"
    > -->
		<input
			:id="id"
			type="checkbox"
			:name="name"
			class="custom-control-input"
			:value="value"
			:checked="checked"
			:required="required"
			:disabled="disabled"
			v-model="value"
		/>
		<span
			v-if="label"
			class="custom-control-indicator custom-control-indicator-primary"
		/>
		<span class="custom-control-description">{{ label }}</span>
	</label>
</template>

<style scoped lang="scss"></style>
