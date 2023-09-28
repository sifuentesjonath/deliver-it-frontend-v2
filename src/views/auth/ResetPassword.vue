<script setup lang="ts">
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
// import { confirmed, min, required } from 'vee-validate/dist/rules';

import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

import CenteredPanel from "@/components/ui/CenteredPanel.vue";
import LabeledTextInput from "@/components/inputs/LabeledTextInput.vue";
import Button from "@/components/ui/Button.vue";

// ToDo: Define this file
// import auth from "@/services/api/auth";

// extend('min', {
//   ...min,
//   message: 'The password must be at least 8 characters',
// });

// extend('required', {
//   ...required,
//   message: 'This field is required.',
// });

// extend('confirmed', {
//   ...confirmed,
//   message: 'The passwords must match.',
// });

const password = ref("");

const confirmation = ref("");

const tokenParam = ref("");

const emailParam = ref("");

const submitDisabled = ref(false);

const status = ref(1); // ToDo: Fix this magic number

const errors: string[] = []; // ToDo: Remove later, it's a temp fix

function goHome() {
	// this.$router.push({ name: 'login' });
}

function postChangePw() {
	disableButton().then(() => {
		// ToDo: Uncomment this when auth becomes defined
		// auth
		// 	.resetPassword(emailParam, tokenParam, password, confirmation)
		// 	.then(() => {
		// 		status.value = 2;
		// 	})
		// 	.catch(() => {
		// 		status.value = 3;
		// 	})
		// 	.finally(() => {
		// 		submitDisabled.value = false;
		// 	});
	});
}

function disableButton() {
	return new Promise((resolve) => {
		submitDisabled.value = true;
		resolve("resolved");
	});
}

function setFieldError(text: string) {
	// @ts-ignore
	this.$refs.form.setErrors({ password: [text] });
}

function processForm(handleSubmit: any) {
	handleSubmit(postChangePw);
}

onMounted(() => {
	// this.tokenParam = String(this.$route.query.token);
	// this.emailParam = String(this.$route.query.email);

	if (tokenParam.value === "undefined" || emailParam.value === "undefined") {
		status.value = 3;
	}
});
</script>

<template>
	<CenteredPanel v-if="status === 1" title="Create New Password">
		<!-- <ValidationObserver ref="form" v-slot="{ handleSubmit }"> -->
		<!-- ToDo: Figure out what is going here -->
		<!-- <form @submit.prevent="processForm(handleSubmit)"> -->
		<form @submit.prevent="processForm(processForm)">
			<div class="flex-row w-100 mt-2">
				<!-- <ValidationProvider
						v-slot="{ errors }"
						vid="password"
						mode="passive"
						rules="required|min:8"
					> -->
				<LabeledTextInput
					v-model="password"
					name="password"
					label="Password"
					type="password"
					:errors="errors"
					:field-input.sync="password"
				/>
				<!-- </ValidationProvider> -->
			</div>

			<div class="flex-row w-100 mt-2">
				<!-- <ValidationProvider
						v-slot="{ errors }"
						rules="required|confirmed:password"
					> -->
				<LabeledTextInput
					v-model="confirmation"
					name="confirmation"
					label="Confirm Password"
					type="password"
					:errors="errors"
					:field-input.sync="confirmation"
				/>
				<!-- </ValidationProvider> -->
			</div>

			<div class="button-group p-0 m-0">
				<div class="flex-row">
					<Button
						:disabled="submitDisabled"
						type="submit"
						class="justify-content-center mt-0"
						text="Reset My Password"
					/>
				</div>
			</div>

			<div class="centered flex-row mt-2">
				<router-link class="link mt-2" :to="{ name: 'login' }">
					Back to Login
				</router-link>
			</div>
		</form>
		<!-- </ValidationObserver> -->
	</CenteredPanel>

	<CenteredPanel v-if="status === 2" title="Thank you">
		<div class="centered d-flex flex-row justify-content-center">
			<span>Your password has been changed.</span>
		</div>
		<div class="d-flex flex-row justify-content-center mt-4">
			<Button name="login" text="Back to Login" @click="goHome" />
		</div>
	</CenteredPanel>

	<CenteredPanel v-if="status === 3" title="Page Has Been Expired.">
		<div class="d-flex justify-content-center">
			<div class="centered flex-row">
				Your token has been expired, Please try again.
			</div>
		</div>

		<div class="d-flex flex-row justify-content-center mt-4">
			<Button name="login" text="Back to Login" @click="goHome" />
		</div>

		<div class="centered flex-row mt-2">
			<RouterLink class="link mt-2" :to="{ name: 'forgot-password' }">
				Forgot Password
			</RouterLink>
		</div>
	</CenteredPanel>
</template>

<style scoped lang="scss">
.centered {
	text-align: center;
}

.link {
	margin-top: 15px;
	font-size: 12px;
	color: #171e2d;
	transition: opacity 0.2s ease-in-out;
	&:hover {
		opacity: 0.6;
	}
}
</style>
