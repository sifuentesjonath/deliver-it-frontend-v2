<script setup lang="ts">
import { defineProps } from "vue";
import type { ButtonHTMLAttributes } from "vue";

defineProps<{
	text: string;
	type?: ButtonHTMLAttributes["type"];
	disabled?: boolean;
	class?: string;
}>();

// ToDo: No idea what this is, figure out that later
// loading?: boolean;
</script>

<template class="button-wrapper d-flex justify-content-start">
	<button
		class="button sharp-sans"
		:class="class"
		:type="type"
		:disabled="disabled"
		@click="$emit('click')"
	>
		<slot>
			<!-- <span v-if="!loading">{{ text }}</span> -->
			<span>{{ text }}</span>
		</slot>
	</button>
</template>

<style scoped lang="scss">
@import "../../sass/variables.scss";

button {
	min-width: 9rem;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 2.5rem;
	background-color: $button-standard;
	font-weight: 500;
	line-height: 2.5rem;
	color: white;
	border-radius: 0.25rem;
	outline: none;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: $button-standard-hover;
	}

	&.dark {
		background-color: $button-dark !important;

		&:hover {
			background-color: $button-dark-hover !important;
		}
	}

	&:disabled {
		background-color: $mid-light-gray;
		pointer-events: none;
	}
}
</style>
