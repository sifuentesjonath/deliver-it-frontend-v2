<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps<{
	value: string;
	options: Array<{ id: any; name: string }>;
	valueKey: string;
	labelKey: string;
	errors: any;
	onChange: any;
}>();

let { valueKey, labelKey, options, value, onChange } = props;

const disabled = ref(false);

const opened = ref(false);

function getVal(opt: any) {
	return !valueKey ? opt : opt[valueKey];
}

function getLabel(opt: any) {
	return !labelKey ? opt : opt[labelKey];
}

function computed() {
	options = [
		{
			name: "Select",
			id: null,
		},
	];
}

function change(opt: any) {
	// this.$emit('input', opt);
	opened.value = false;

	if (onChange !== undefined) {
		onChange(value);
	}
}

function toggle() {
	if (disabled.value) {
		return;
	}
	opened.value = !opened.value;
}

function close() {
	opened.value = false;
}
</script>

<template>
	<div>
		<div
			v-click-outside="close"
			:class="{ __disabled: disabled }"
			class="custom-dropdown-wrapper pull-left"
		>
			<div class="custom-dropdown" @click="toggle">
				{{ getLabel(value).name }}
				<i class="material-icons custom-select-arrow">expand_more</i>
			</div>
			<div v-if="opened" class="custom-dropdown-options">
				<!-- ToDo: Fix later -->
				<div
					v-for="o in options"
					:key="o.id"
					:value="getVal(value)"
					:class="{ __active: getVal(o) == getVal(value) }"
					class="select_option"
					@click="change(o)"
					@input="$emit('update:fieldInput', $event.target.value)"
				>
					{{ getLabel(o).name }}
				</div>
			</div>
			<div v-if="opened" class="select_overlay" @click="toggle" />
			<div v-if="errors" class="error-holder flex-row">
				<span class="error-text">{{ errors[0] }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.custom-dropdown-wrapper {
	min-width: 100px;
	width: 100%;
	margin-left: 0;
	position: relative;
	margin-top: -9px;
	display: inline-block;
	z-index: 6;
}

.custom-dropdown {
	color: #525f6c;
	padding: 0.5rem 1.5rem;
	font-size: 0.875rem;
	line-height: 1.5;
	width: 100%;
	border: 1px solid #dfe3e9;
	// padding: 8px 25px 8px 8px;
	background: #fff;
	float: left;
	position: relative;
	// font-size: 0.75rem;
	font-weight: 500;
	min-width: 100px;
	cursor: pointer;
	height: auto !important;
	&:focus,
	&:active,
	.active {
		border: 1px solid #5589d7;
		box-shadow: 0 0 3px #5589d7;
	}
	i.custom-select-arrow {
		position: absolute;
		right: 8px;
		top: 50%;
		transform: translateY(-50%);
		line-height: 1;
		display: inline-block;
		font-size: 14px;
	}

	&.disabled {
		opacity: 0.5;
		pointer-events: none;
		user-select: none;
	}
}

.custom-dropdown-options {
	color: #525f6c;
	max-height: 250px;
	width: 100%;
	overflow-y: auto;
	border: 1px solid #dfe3e9;
	border-top: none;
	min-width: 100px;
	background: #fff; // width: 100%;
	display: inline-block;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 9999999;
	.select_option {
		font-size: 12px;
		padding: 10px;
		border-bottom: 1px solid #ececec;
		cursor: pointer;
		font-weight: normal; // white-space: nowrap;
		&:hover {
			background: #f4f4f4;
		}
	}
}

.active {
	color: #7542f1 !important;
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
</style>
