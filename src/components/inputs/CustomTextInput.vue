<script setup lang="ts">
import { defineProps, ref } from "vue";

defineProps<{
	name: string;
	label: string;
	type: string;
	autocomplete?: string;
	errors: Array<string>;
	info: string;
	placeholder: string;
	color?: string;
}>();

const inputContent = ref("");
</script>

<template>
	<div class="input-section">
		<div class="flex-row">
			<label v-if="label" :for="name" class="control-label">
				{{ label }}
				<fa v-if="info" :icon="['fal', 'info-circle']" />
			</label>
			<input
				:id="name"
				class="form-control"
				:class="color"
				:type="type"
				:name="name"
				:value="$attrs.value"
				:autocomplete="autocomplete"
				:placeholder="placeholder"
				v-model="inputContent"
			/>
		</div>
		<div v-if="errors.length > 0" class="error-holder flex-row">
			<span class="error-text">{{ errors[0] }}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
.error-holder {
	height: 2rem;
	.error-text {
		margin-top: 0.5rem;
		font-size: 0.8rem;
		font-weight: 300;
		color: $red;
	}
}
</style>
