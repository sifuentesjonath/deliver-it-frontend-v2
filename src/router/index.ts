import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/dashboard/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/dashboard",
		},
		{
			path: "/auth",
			name: "auth",
			component: () => import("../components/layout/Auth.vue"),
			children: [
				{
					path: "login",
					name: "login",
					component: () => import("../views/auth/Login.vue"),
				},
				{
					path: "forgot-password",
					name: "forgot-password",
					component: () => import("../views/auth/ForgotPassword.vue"),
				},
				{
					path: "reset-password",
					name: "reset-password",
					component: () => import("../views/auth/ResetPassword.vue"),
				},
			],
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: () => import("../components/layout/Dashboard.vue"),
			children: [
				{
					path: "company",
					name: "company",
					component: () => import("../views/dashboard/Company.vue"),
				},
				{
					name: "customers",
					path: "customers",
					component: () => import("../views/dashboard/Customers.vue"),
				},
				{
					name: "serviceSetup",
					path: "serviceSetup",
					component: () => import("../views/dashboard/ServiceSetup.vue"),
				},
				{
					name: "serviceSetupConfig",
					path: "serviceSetup/configuration",
					component: () => import("../views/dashboard/ServiceSetupConfig.vue"),
				},
				{
					name: "miscFeeSetup",
					path: "miscFeeSetup",
					component: () => import("../views/dashboard/MiscFeeConfiguration.vue"),
				},
				{
					name: "miscFeeSetupConfiguration",
					path: "miscFeeSetup/configuration",
					component: () => import("../views/dashboard/MiscFeeConfiguration.vue"),
				},
				{
					name: "zoneSetup",
					path: "zoneSetup",
					component: () => import("../views/dashboard/Zone.vue"),
				},
				{
					name: "zoneConfiguration",
					path: "zoneSetup/configuration",
					component: () => import("../views/dashboard/ZoneConfiguration.vue"),
				},
				{
					name: "salesPerson",
					path: "salesPerson",
					component: () => import("../views/dashboard/SalesPerson.vue"),
				},
				{
					name: "terminals",
					path: "terminals",
					component: () => import("../views/dashboard/Terminals.vue"),
				},
				{
					name: "terminalConfiguration",
					path: "terminals/configuration",
					component: () => import("../views/dashboard/TerminalConfiguration.vue"),
				},
				{
					name: "customerGroup",
					path: "customerGroup",
					component: () => import("../views/dashboard/CustomerGroup.vue"),
				},
				{
					name: "drivers",
					path: "drivers",
					component: () => import("../views/dashboard/DriversMaintenance.vue"),
				},
				{
					name: "route",
					path: "route",
					component: () => import("../views/dashboard/RouteMaintenance.vue"),
				},
				{
					name: "order-entry",
					path: "order-entry",
					component: () => import("../views/order/OrderEntry.vue"),
				},
				{
					name: "customer-order-entry",
					path: "customer-order-entry",
					component: () => import("../views/order/CustomerOrderEntry.vue"),
				},
				{
					name: "zipcode",
					path: "zipcode",
					component: () => import("../views/dashboard/ZipCodeMaintenance.vue"),
				},
				{
					name: "zipcodeCreation",
					path: "zipcodeCreation",
					component: () => import("../views/dashboard/ZipCodeCreation.vue"),
				},
				{
					name: "terminalmaintenance",
					path: "terminalmaintenance",
					component: () => import("../views/dashboard/TerminalMaintenance.vue"),
				},
				{
					name: "terminalcreation",
					path: "terminalcreation",
					component: () => import("../views/dashboard/TerminalCreation.vue"),
				},
				{
					name: "dispatchgroupmaintenance",
					path: "dispatchgroupmaintenance",
					component: () => import("../views/dashboard/DispatchListing.vue"),
				},
				{
					name: "dispatchcreation",
					path: "dispatchcreation",
					component: () => import("../views/dashboard/DispatchCreation.vue"),
				},
			],
		},
	],
});

export default router;
