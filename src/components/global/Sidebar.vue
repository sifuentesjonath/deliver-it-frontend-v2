<script setup lang="ts">
import { onMounted, ref } from "vue";
import { menu as MenuModel } from "../../model/menu";
import { RouterLink } from "vue-router";

const menu = ref(MenuModel);

onMounted(() => {
	console.log("Menu: ", menu);
});
</script>

<template>
	<div class="list-group list-group-flush">
		<div class="sidebar-header bg-info mb-5">
			<div class="sidebar-brand">
				<img class="img-fluid" src="@/assets/icons/Deliver-It-Logo.svg" />
			</div>
		</div>
		<ul id="sidebar-menu" v-app-Collapsible-Nav class="list-unstyled sidemenu">
			<template v-for="(item, i) in menu" :key="i">
				<li class="list-nav-item">
					<RouterLink
						v-if="!(item.children && item.children.length) && item.path"
						:to="item.path"
						class="list-nav-link cursor-pointer"
					>
						<!-- <span class="list-nav-icon">
							<i :class="item.icon.class" v-if="item.icon?.content">{{
								item.icon.content
							}}</i>
						</span> -->
						<span class="list-nav-label">{{ item.label }}</span>
					</RouterLink>
					<a v-if="item.children && item.children.length" class="list-nav-link">
						<!-- <span class="list-nav-icon">
							<i :class="item.icon.class" v-if="item.icon?.content">{{
								item.icon.content
							}}</i>
						</span> -->
						<span class="list-nav-label">{{ item.label }}</span>
						<!-- <span class="list-nav-icon list-nav-icon-sm">
							<i class="material-icons expand-icon">expand_more</i>
						</span> -->
					</a>
					<ul
						v-if="item.children && item.children.length"
						class="sub-menu list-nav-child"
					>
						<li
							v-for="(subitem, index) in item.children"
							:key="index"
							class="list-nav-item list-nav-child-item"
							active-class="active"
						>
							<RouterLink
								v-if="subitem.path"
								:to="subitem.path"
								class="list-nav-link cursor-pointer"
							>
								<span class="list-nav-label">{{ subitem.label }}</span>
							</RouterLink>
						</li>
					</ul>
				</li>
			</template>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.bg-info {
	background: #fff !important;
}

.sidebar-brand {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	height: 3.8rem;
	padding: 0.3rem 1.3rem;
	line-height: (3.8rem - (2 * 0.3rem));
	font-size: 1.3em;
	font-family: "Arvo";
	font-weight: 400;
	.title {
		transition: opacity 0.5s;
	}
	.img-fluid {
		max-width: 100%;
	}
}
.list-unstyled {
	padding-left: 0;
	list-style: none;
}
#sidebar-menu {
	color: #bfc7cf;
	.list-nav-item {
		color: #989898;
		display: block;
		margin: 0;
		padding: 0;
		width: 100%;
		cursor: pointer;
		a {
			i {
				display: inline-block;
				min-width: 1.75rem;
				padding-bottom: 0.125em;
				font-size: 1.05em;
				line-height: inherit;
				vertical-align: middle;
				color: #7f8387;
				-webkit-transition: all 0.4s;
				transition: all 0.4s;
			}
		}
		.sub-menu {
			padding: 0;
			display: block;
			background: #242424;
			margin: 0;
			height: auto;
			overflow: hidden;
			li {
				a {
					padding-left: 55px;
					transition: all 0.65s;
					font-size: 14px;
					color: #989898;
					&:hover {
						background: none;
						color: #fff;
					}
				}
			}
			.list-nav-label {
				font-size: 12px !important;
				color: #868686;
			}
		}
		&.active {
			.list-nav-child {
				height: auto;
			}
		}
		.list-nav-child {
			display: block;
			margin: 0;
			padding: 0;
			height: 0;
			overflow: hidden;
		}
		.list-nav-link {
			display: flex;
			line-height: 2.1rem;
			padding: 0.6rem 1rem;
			text-decoration: none;
			color: inherit;
			&:focus,
			&:active {
				outline: none;
			}
			.list-nav-icon {
				background: none !important;
				color: inherit;
				transition: background-color 0.5s ease;
				display: block;
				width: 2.1rem;
				height: 2.1rem;
				min-width: 2.1rem;
				line-height: 2.1rem;
				text-align: center;
				border-radius: 2px;
				background-color: rgba(100, 120, 140, 0.1);
			}
			.list-nav-label {
				text-transform: uppercase;
				font-size: 14px;
				padding-left: 0px;
				display: block;
				width: 100%;
			}
		}
		&:active {
			color: #989898 !important;
		}
		.list-nav-child-item {
			&.active {
				> a {
					color: #717274;
					background: none;
					border-left: none;
				}
			}
		}
		.list-nav-item {
			&.active {
				.list-nav-label {
					color: #c7c7c7;
				}
			}
		}
		&.active {
			> a {
				background: #2f2e2e;
				border-left: 4px solid #5e30ea;
			}
		}
	}
}
.list-nav-item {
	> a {
		&:hover {
			background: #2f2e2e;
			color: #989898;
			text-decoration: none;
		}
	}
}
</style>
