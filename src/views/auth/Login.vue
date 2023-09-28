<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import CenteredPanel from '@/components/ui/CenteredPanel.vue';
import Button from '@/components/ui/Button.vue';
import LabeledTextInput from '@/components/inputs/LabeledTextInput.vue';

// extend('email', {
//   ...email,
//   message: 'Please enter a valid email.',
// });
// extend('required', {
//   ...required,
//   message: 'This field is required.',
// });

const email = ref('');

const password = ref('');

const error = ref('');

const submitDisabled = ref(false);

// @Action('auth/login') loginAction: any;

function postLogin() {
  // this.submitDisabled = true;
  // this.loginAction({ email: this.email, password: this.password })
  //   .then(() => {
  //     this.$router.push({ name: 'dashboard' });
  //   })
  //   .catch(() => this.setError('There was a problem with your username or password.'))
  //   .finally(() => { this.submitDisabled = false; });
}

function processForm(handleSubmit: any) {
  setError('');
  handleSubmit(postLogin);
}

function setError(text: string) {
  error.value = text;
}

const errors: string[] = []; // ToDo: Temp fix, remove later

</script>

<template>
  <!-- <AuthLayout class="body-holder w-100 h-100" data-test="login-page"> -->
    <CenteredPanel title="Concise Portal" :no-top-padding="true">
      <div class="flex-row error-holder">
        <span v-if="error" class="error-text">{{ error }}</span>
      </div>
      <!-- <ValidationObserver v-slot="{ handleSubmit }"> -->
        <!-- ToDo: Figure out what is going here -->
        <!-- @submit.prevent="processForm(handleSubmit) -->
        <form @submit.prevent="processForm(postLogin)"> 
          <!-- <ValidationProvider v-slot="{ errors }" mode="passive" rules="required|email"> -->
            <LabeledTextInput v-model="email" name="email" label="Email" type="text" :errors="errors"
              :field-input.sync="email" autocomplete="username" />
          <!-- </ValidationProvider> -->

          <!-- <ValidationProvider v-slot="{ errors }" mode="passive" rules="required"> -->
            <LabeledTextInput v-model="password" name="password" label="Password" type="password"
              :errors="errors" :field-input.sync="password" autocomplete="current-password" />
          <!-- </ValidationProvider> -->

          <div class="button-group p-0 m-0">
            <Button
              :disabled="submitDisabled" 
              type="submit" 
              class="justify-content-center mt-0"
              text="Log In" 
            />
            <div class="flex-row mt-2">
              <RouterLink class="forgot-link" :to="{ name: 'forgot-password' }">
                Forgot Password
              </RouterLink>
            </div>
          </div>
        </form>
      <!-- </ValidationObserver> -->
    </CenteredPanel>
  <!-- </AuthLayout> -->
</template>

<style scoped lang="scss">
@import '../../sass/variables.scss';
.error-holder {
  padding-top: 0.5rem;
  height: 2.2rem;
}

.error-text {
  font-size: 12px;
  font-weight: 300;
  color: #f26e5d;
}

.button-group {
  text-align: center;
}

.input-section {
  label {
    font-size: 14px;
    font-weight: 600;
    color: #171e2d;
    font-family: $sharp-sans;
  }

  .input-text {
    font-size: 1rem;
    padding: 0.9rem;
    border: .06rem solid #86878f;
    border-radius: 0.25rem;
  }
}

.forgot-link {
  margin-top: 15px;
  font-size: 12px;
  color: #171e2d;
  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
}
</style>
