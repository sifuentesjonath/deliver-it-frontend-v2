<template>
	<footer data-test="footer">
		<RouterLink class="img-link mt-4" to="/">
			<!--
      <img
        class="img-fluid h-100"
        src="@/assets/footer-logo.svg"
        alt="Concise Logo"
      >
      -->
		</RouterLink>
	</footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
footer {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 10px;
	.img-link {
		height: 3rem;
		margin-top: 8px;
	}
}
</style>
