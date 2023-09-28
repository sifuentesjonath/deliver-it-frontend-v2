<script setup lang="ts">
import { RouterView } from "vue-router";
import Footer from "../global/Footer.vue";
// import { Component, Vue } from 'vue-property-decorator';
// import TheFooter from '@/components/global/TheFooter.vue';

//   @Component({
//     components: {
//       TheFooter,
//     },
//   })
// export default class MainLayoutComponent extends Vue {
// }
</script>

<template>
	<main class="d-flex flex-column">
		<section class="d-flex h-100">
			<RouterView />
		</section>
		<Footer />
	</main>
</template>

<style scoped lang="scss">
main {
	height: 100vh;
}
</style>
