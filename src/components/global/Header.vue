<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // load on demand

// ToDo: Create these components and service and then uncomment below where the api is used

// import BellNotificationComponent from '@/components/ui/nav/BellNotificationComponent.vue';
// import api from '@/services/api/api';
// import AvatarDropdownComponent from '@/components/ui/nav/AvatarDropdownComponent.vue';

const notificationData: Ref<any[]> = ref([]);

const displayNotifications = ref(false);

const isOpen = ref(false);

// Note: I did not comment this, we'll need to figure out how to access router
function gotoItem(value: any) {
	// this.$router.push({ name: value.type, params: { id: value.id } });
}

function hideNotification() {
	displayNotifications.value = false;
}

function toggleNotification() {
	displayNotifications.value = !displayNotifications.value;
}

// ToDo: Uncomment content when api becomes present
function getNotifications() {
	dayjs.extend(relativeTime);
	// api
	//   .getNotifications()
	//   .then((data) => {
	//     const results = data.data.data; // ToDo: Delete this awful thing as soon as possible

	//     if (results.length > 0) {
	//       clearNotifications();
	//       results.forEach((item: any) => {
	//         switch (item.action) {
	//           case 'enrollee.assigned':
	//             notificationData.value = [...notificationData.value, {
	//               id: item.id,
	//               action_id: item.user_id,
	//               action: item.action,
	//               target: item.user_name,
	//               text: 'You have been assigned',
	//               by: item.actor_name,
	//               read: false,
	//               subLeft: item.module,
	//               subRight: dayjs.unix(item.created_at).fromNow(),
	//             }];
	//             break;
	//           default:
	//             break;
	//         }
	//       });
	//     }
	//   })
	//   .finally(() => toggleNotification());
}

// ToDo: Uncomment content when api becomes present
function markNotificationAsRead(value: any) {
	// api.markNotificationAsRead(value.id).then(() => {
	//   // this.$router.push({ name: 'link', params: { id: value.id } });
	// });
}

function clearNotifications() {
	notificationData.value = [];
}

function toggleHamburger() {
	isOpen.value = !isOpen.value;
	// this.$emit('parentToggled', this.isOpen);
}
</script>

<template>
	<header>
		<nav class="nav-bar">
			<a class="topbar-menu navbar-menu-icon" @click="toggleHamburger">
				<icon class="material-icons">menu</icon>
			</a>
			<!-- <span class="material-icons">menu</span> -->
			<div id="navbarSupportedContent" class="collapse navbar-collapse">
				<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
					<li class="nav-item dropdown">
						<BellNotificationComponent
							v-click-outside="hideNotification"
							data-test="notificationButton"
							:display="displayNotifications"
							class="link"
							:notification-data="notificationData"
							@notificationsShow="getNotifications"
							@notificationClick="markNotificationAsRead"
						/>
					</li>
					<li>
						<AvatarDropdownComponent class="link" />
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<style scoped lang="scss">
@import "../../sass/variables.scss";

/* @import "~@/sass/bootstrap/_functions.scss";
@import "~@/sass/bootstrap/_variables.scss";
@import "~@/sass/bootstrap/mixins/_breakpoints.scss"; */

header {
	font-size: 1rem;
	height: 5.3rem !important;
	top: 0;
	/* background-color: $light-gray; */
	z-index: 10;

	/* @include media-breakpoint-down(md) {
    font-size: 0.9rem;
  } */

	.nav-bar {
		padding: 0.5rem 1rem;
		background-color: $mid-lighter-gray;
	}
	// Condensed Nav for Small Devices
	.basic-nav {
		/* @include media-breakpoint-down(sm) {
      width: 100%;
    } */

		// Logo
		.img-link {
			height: 2.5rem;
		}

		// Hamburger Button for Dropdown Nav
		.hamburger {
			border-width: thin;
			border-style: solid;
			/* border-color: $mid-gray; */
			padding: 0.5rem 0.8rem;
			border-radius: 0.3rem;
			/* color: $mid-gray; */
			&:hover {
				/* border-color: $blue; */
				/* color: $blue; */
			}
		}
	}
	.navbar-menu-icon {
		cursor: pointer;
		display: flex;
		align-items: center;
		width: fit-content;
		text-decoration: none;
		color: black;
	}
	nav {
		ul {
			/* background-color: $gray-100; */
			list-style: none;
			top: 0;

			/* @include media-breakpoint-up(md) {
        height: 100%;
      } */

			li {
				display: inline-block;
				padding: 0;
				font-weight: 500;

				.link {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
					/* color: $mid-gray; */
					text-decoration: none;
					&:hover {
						/* color: $blue; */
					}
				}

				.active-link {
					height: 100%;
					/* color: $blue; */
					font-size: 1rem;
					text-decoration: none;
					/* border-top: 0.2rem solid $blue; */
				}

				// Opened Dropdown Nav List Item
				&.open-li {
					margin-top: 0.75rem;
					margin-bottom: 0.75rem;
					height: 2.5rem;
				}
			}
		}

		// Dropdown Nav Container
		& .dropdown-nav {
			top: 0;
			left: 0;
			/* background-color: $light-gray; */
			/* border-bottom: 1px solid $mid-gray; */
		}
	}
}
.navbar {
	background-color: #f3f6fa !important;
	border-bottom: 1px solid #e8ecf1;
	height: 50px;
}
// Close button on expanded Dropdown Nav Container
.close-nav {
	/* color: $mid-gray; */
	margin: 2rem 2.8rem;
	cursor: pointer;
	&:hover {
		/* color: $blue; */
	}
}

.drafts {
	min-width: 6.3rem;
}

.search {
	max-width: 20rem;
}
.navbar-toggler {
	display: block !important;
}
</style>
