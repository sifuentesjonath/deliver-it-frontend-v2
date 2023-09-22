import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
			],
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: () => import("../components/layout/Dashboard.vue"),
			children: [],
		},
		// {
		//   path: "/auth/forgot-password",
		//   name: "forgot-password",
		//   // component: () => import("../views/auth/ForgotPasswordPage.vue"),
		// },
		// {
		//   path: "/auth/reset-password",
		//   name: "reset-password",
		//   // component: () => import("../views/auth/ResetPasswordPage.vue"),
		// },
		// {
		//   path: "/dashboard",
		//   name: "dashboard",
		//   // component: () => import("../layouts/MainLayout.vue"),
		//   children: [
		//     {
		//       name: "company",
		//       path: "company",
		//       // component: () => import("../views/CompanyPage.vue"),
		//     },
		//     {
		//       name: "serviceSetup",
		//       path: "serviceSetup",
		//       // component: () => import("../views/ServicePage.vue"),
		//     },
		//     {
		//       name: "serviceSetup",
		//       path: "serviceSetup/configuration",
		//       // component: () => import("../views/ServiceSetupPage.vue"),
		//     },
		//     {
		//       name: "miscFeeSetup",
		//       path: "miscFeeSetup/configuration",
		//       // component: () => import("../views/MiscFeeConfigurationPage.vue"),
		//     },
		//     {
		//       name: "miscFeeSetup",
		//       path: "miscFeeSetup",
		//       // component: () => import("../views/MiscFeeConfigurationPage.vue"),
		//     },
		//     {
		//       name: "zoneSetup",
		//       path: "zoneSetup",
		//       // component: () => import("../views/ZonePage.vue"),
		//     },
		//     {
		//       name: "zoneConfiguration",
		//       path: "zoneSetup/configuration",
		//       // component: () => import("../views/ZoneConfigurationPage.vue"),
		//     },
		//     {
		//       name: "terminalConfiguration",
		//       path: "terminals/configuration",
		//       // component: () => import("../views/TerminalConfigurationPage.vue"),
		//     },
		//     {
		//       name: "terminals",
		//       path: "terminals",
		//       // component: () => import("../views/TerminalsPage.vue"),
		//     },
		//     {
		//       name: "customers",
		//       path: "customers",
		//       // component: () => import("../views/CustomerMaintenance.vue"),
		//     },
		//     {
		//       name: "customerGroup",
		//       path: "customerGroup",
		//       // component: () => import("../views/CustomerGroupPage.vue"),
		//     },
		//     {
		//       name: "salesPerson",
		//       path: "salesPerson",
		//       // component: () => import("../views/SalesPersonPage.vue"),
		//     },
		//     {
		//       name: "assignments",
		//       path: "assignments",
		//       // component: () => import("../views/AssignmentsPage.vue"),
		//     },
		//     {
		//       name: "drivers",
		//       path: "drivers",
		//       // component: () => import("../views/DriversMaintenance.vue"),
		//     },
		//     {
		//       name: "route",
		//       path: "route",
		//       // component: () => import("../views/RouteMaintenance.vue"),
		//     },
		//     {
		//       name: "order-entry",
		//       path: "order-entry",
		//       // // component: () => import("../views/order/OrderEntryComponent.vue"),
		//     },
		//     {
		//       name: "customer-order-entry",
		//       path: "customer-order-entry",
		//       // component: () => import("../views/customer-order-entry/CustomerOrderEntryComponent.vue"),
		//     },
		//     {
		//       name: "zipcode",
		//       path: "zipcode",
		//       // component: () => import("../views/ZipcodeMaintenance.vue"),
		//     },
		//     {
		//       name: "zipcodeCreation",
		//       path: "zipcodeCreation",
		//       // // // component: () => import("../views/route-components/ZipCodeCreationComponent.vue"),
		//     },
		//     {
		//       name: "terminalmaintenance",
		//       path: "terminalmaintenance",
		//       // // component: () => import("../views/route-components/TerminalListingPage.vue"),
		//     },
		//     {
		//       name: "terminalcreation",
		//       path: "terminalcreation",
		//       // // // component: () => import("../views/route-components/TerminalCreationComponent.vue"),
		//     },
		//     {
		//       name: "dispatchgroupmaintenance",
		//       path: "dispatchgroupmaintenance",
		//       // // component: () => import("../views/route-components/DispatchListingPage.vue"),
		//     },
		//     {
		//       name: "dispatchcreation",
		//       path: "dispatchcreation",
		//       // component: () => import("../views/route-components/DispatchComponent.vue"),
		//     },
		//   ],
		// }
	],
});

export default router;
