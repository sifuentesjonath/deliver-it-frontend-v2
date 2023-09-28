<script setup lang="ts">
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
// import { email, required } from 'vee-validate/dist/rules';

import { ref } from "vue";
import { RouterLink } from "vue-router";

import CenteredPanel from "@/components/ui/CenteredPanel.vue";
import LabeledTextInput from "@/components/inputs/LabeledTextInput.vue";
import Button from "@/components/ui/Button.vue";

// ToDo: Define this file
// import auth from '@/services/api/auth';

// extend('email', {
//   ...email,
//   message: 'Please enter a valid email.',
// });
// extend('required', {
//   ...required,
//   message: 'This field is required.',
// });

const email = ref("");

const isSent = ref(false);

const submitDisabled = ref(false);

const errors: string[] = []; // ToDo: Remove later, it's a temp fix

function postForgot() {
	disableButton().then(() => {
		// ToDo: Uncomment later when auth is defined
		// auth.forgotPassword(email.value)
		//   .then(() => {
		//     isSent.value = true;
		//   })
		//   .catch(() => {
		//     setFieldError('email', 'Please check your email and try again.')
		//   })
		//   .finally(() => { submitDisabled.value = false; })
	});
}

function disableButton() {
	return new Promise((resolve) => {
		submitDisabled.value = true;
		resolve("resolved");
	});
}

function processForm(handleSubmit: any) {
	handleSubmit(postForgot);
}

function setFieldError(theField: string, text: string) {
	// @ts-ignore
	this.$refs.form.setErrors({ email: [text] });
}
</script>

<template>
	<!-- <AuthLayout data-test="forgot-password--page" > -->
	<CenteredPanel v-if="!isSent" title="Reset Your Password">
		<!-- <ValidationObserver
        ref="form"
        v-slot="{ handleSubmit }"
      > -->
		<!-- ToDo: Figure out what is going here -->
		<!-- @submit.prevent="processForm(handleSubmit)"  -->
		<form @submit.prevent="processForm(postForgot)">
			<div class="d-flex flex-row">
				<div class="content-holder w-100">
					<span>
						Enter your email address below, and we'll send you a link to your
						inbox to reset your password.
					</span>
				</div>
			</div>
			<div class="flex-row w-100 mt-3">
				<!-- <ValidationProvider
              v-slot="{ errors }"
              vid="email"
              mode="passive"
              rules="required|email"
            > -->
				<LabeledTextInput
					v-model="email"
					name="email"
					label="Email"
					type="text"
					:errors="errors"
					:field-input.sync="email"
				/>
				<!-- </ValidationProvider> -->
			</div>
			<div class="d-flex flex-row justify-content-center">
				<Button
					:disabled="submitDisabled"
					vid="submitButton"
					type="submit"
					class="justify-content-center mt-0"
					text="Reset My Password"
				/>
			</div>
			<div class="d-flex flex-row">
				<div class="content-holder w-100 mt-3">
					<RouterLink class="link" :to="{ name: 'login' }">
						Back to Log in
					</RouterLink>
				</div>
			</div>
		</form>
		<!-- </ValidationObserver> -->
	</CenteredPanel>

	<transition name="tyt">
		<CenteredPanel v-if="isSent" title="Thank you">
			<div class="d-flex flex-row">
				<div class="content-holder w-100">
					<span>
						Check your email for further instructions to reset your password.
						Thank you!
					</span>
				</div>
			</div>

			<div class="d-flex flex-row">
				<div class="content-holder w-100 mt-3">
					<RouterLink class="link" :to="{ name: 'login' }">
						Back to Log in
					</RouterLink>
				</div>
			</div>
		</CenteredPanel>
	</transition>
	<!-- </AuthLayout> -->
</template>

<style scoped lang="scss">
.error-holder {
	padding-top: 0.5rem;
	height: 2.2rem;
	text-align: center;
}

.error-text {
	font-size: 12px;
	font-weight: 300;
	color: #f26e5d;
}
.body-holder {
	background-color: #f0f2f6;
}

.content-holder {
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

.tyt-enter-active,
.tyt-leave-active {
	transition: all 0.3s;
}
.tyt-enter,
.tyt-leave-to {
	transform: translateX(0.5rem);
	opacity: 0;
}
</style>
