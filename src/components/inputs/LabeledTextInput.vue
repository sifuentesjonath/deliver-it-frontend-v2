<script setup lang="ts">
import { defineProps, ref } from "vue";
// import { ValidationProvider } from 'vee-validate';

// Vue.component('ValidationProvider', ValidationProvider);

defineProps<{
	name: string;
	label: string;
	type: string;
	autocomplete?: string;
	errors: Array<string>;
	info?: string;
	text?: string;
	color?: string;
}>();

const inputContent = ref("");
</script>

<template>
	<div class="input-section">
		<div class="flex-row">
			<label :for="name">
				{{ label }}
				<fa v-if="info" :icon="['fal', 'info-circle']" />
				<input
					:id="name"
					class="input-text w-100"
					:class="color"
					:type="type"
					:name="name"
					:autocomplete="autocomplete"
					:placeholder="text"
					v-model="inputContent"
				/>
			</label>
		</div>
		<div class="error-holder flex-row">
			<span v-if="errors" class="error-text">{{ errors[0] }}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "../../sass/variables.scss";
.input-section {
	label {
		width: 100%;
		font-size: 0.8rem;
		font-weight: 300;
		color: $midnight;
		font-family: $sharp-sans;
	}

	input {
		&.dark {
			background-color: $light-gray !important;
		}
	}

	.input-text {
		font-family: $sharp-sans;
		font-size: 1rem;
		padding: 0.9rem;
		font-weight: 300;
		color: $midnight;
		border: 0.06rem solid $mid-gray;
		border-radius: 0.25rem;
		outline: none;
	}

	.error-holder {
		height: 2rem;
		.error-text {
			margin-top: 0.5rem;
			font-size: 0.8rem;
			font-weight: 300;
			color: $red;
		}
	}
}
</style>
