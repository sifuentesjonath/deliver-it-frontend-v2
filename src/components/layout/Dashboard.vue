<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import Sidebar from "@/components/global/Sidebar.vue";
// import { extend } from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';

// Object.keys(rules).forEach((rule) => {
//   extend(rule, rules[rule]);
// });

// @ts-ignore
// for (const [rule, validation] of Object.entries(rules)) {
//   extend(rule, {
//     ...validation,
//   });
// }

const isOpen = ref(false);

function toggleClass(value: boolean) {
	isOpen.value = value;
}
</script>

<template>
	<main
		id="wrapper"
		class="d-flex"
		data-test="main"
		:class="{ toggled: isOpen }"
	>
		<div id="sidebar-wrapper" class="sidebar-wrapper border-right">
			<Sidebar />
		</div>
		<div id="page-content-wrapper">
			<div class="topbar-container">
				<Header @parentToggled="toggleClass" />
			</div>
			<div class="container-fluid">
				<section>
					<template>
						<RouterView />
					</template>
				</section>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
main {
	margin: 0 auto;
	height: 100vh;
	padding: 0;

	.content-holder {
		margin-top: 5.3rem;
	}
	.sidebar-container {
		position: relative;
		z-index: 100;
	}
	.sidebar-wrapper {
		background: #242424;
		width: 240px;
		position: fixed;
	}
	#page-content-wrapper {
		min-width: 100%;
		padding-left: 240px;
		transition: margin 0.25s ease-out;
	}
	// @media (min-width: 768px) {
	//   #page-content-wrapper {
	//     min-width: 0;
	//     width: 100%;
	//   }
	// }
	#sidebar-wrapper {
		z-index: 9;
		min-height: 100vh;
		-webkit-transition: margin 0.25s ease-out;
		-moz-transition: margin 0.25s ease-out;
		-o-transition: margin 0.25s ease-out;
		transition: margin 0.25s ease-out;
	}

	#sidebar-wrapper .sidebar-heading {
		padding: 0.875rem 1.25rem;
		font-size: 1.2rem;
	}

	#sidebar-wrapper .list-group {
		width: 100%;
	}

	// @media (min-width: 768px) {
	//   #sidebar-wrapper {
	//     margin-left: 0;
	//   }
	//   #page-content-wrapper {
	//     min-width: 0;
	//     width: 100%;
	//   }
	// }
}
// @media (min-width: 767px) {
//   #wrapper.toggled #page-content-wrapper {
//     margin-left: 15px;
//     transition: margin 0.25s ease-out;
//   }
// }
// @media (max-width: 767px) {
//   #wrapper #page-content-wrapper {
//     margin-left: 15px;
//   }
//   #wrapper.toggled #page-content-wrapper {
//     margin-left: 240px;
//   }
//   #wrapper.toggled #sidebar-wrapper {
//     margin-left: 0;
//   }
// }
</style>
