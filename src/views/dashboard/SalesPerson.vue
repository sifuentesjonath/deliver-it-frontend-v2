<script setup lang="ts">
// import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
// import { confirmed } from 'vee-validatek/dist/rules';

import CustomDropdown from "@/components/global/CustomDropdown.vue";
import CustomTextInput from "@/components/inputs/CustomTextInput.vue";
import CustomTextInputValidation from "@/components/inputs/CustomTextInputValidation.vue";
import CommonSearchModal from "@/components/global/CommonSearchModal.vue";

// FIXME: v-model cannot be used on a prop, because local prop bindings are not writable.
// import Checkbox from "@/components/inputs/Checkbox.vue";

import { SalesPerson } from "../../model/sales-person";
import { defaultStateListOptions } from "../../constants/common-options";

import { ref, onMounted, type Ref } from "vue";

// ToDo: Define later
// import UserDataService from "../services/api/UserDataService";
// import ToasterService from "../services/api/ToasterService";
// import CustomerDataService from "../services/api/CustomerDataService";

// extend('confirmed', {
//   // ...confirmed,
//   message: 'Password and Confirm Password should match.',
// });
// extend('minmax', {
//   validate(value, args: any) {
//     const { length } = value;

//     return length >= args.min && length <= args.max;
//   },
//   params: ['min', 'max'],
//   // message: () => "The code must be of 5 characters",
// });

const options: any = [
	{ name: "foo", id: 1 },
	{ name: "bar", id: 2 },
	{ name: "cat", id: 3 },
];

const password = ref("");

const passwordConfirm = ref("");

const submitDisabled = ref(false);

const selected: any = ref({ name: "bar", id: 2 });

const stateListOptions = defaultStateListOptions;

const salesPerson = ref(new SalesPerson());

const modalData = ref([]);

const userData: Ref<any[]> = ref([]);

const errors: string[] = [];

// $refs!: {
//   observer: InstanceType<typeof ValidationObserver>;
// };

// @Action('salesPerson/salespersons') salespersonsAction: any;

onMounted(() => {
	getSalesPerson();
});

async function getSalesPerson() {
	// try {
	//   const salesPersonData = await salespersonsAction();
	//   if (salesPersonData && salesPersonData.data.length > 0) {
	//     userData = salesPersonData.data;
	//   }
	// } catch (error) {
	//   console.log('error', error);
	// }
}

// ToDo: Uncomment content when services are defined
function onSubmit() {
	// const request = salesPerson.mapToRequest();
	// submitDisabled = true;
	// if (request.id) {
	// 	UserDataService.editUser(request).then(() => {
	// 		refreshForm();
	// 		ToasterService.success({
	// 			message: "Sales Person updated successfully",
	// 		});
	// 	});
	// } else {
	// 	UserDataService.createUser(request).then(() => {
	// 		refreshForm();
	// 		ToasterService.success({
	// 			message: "Sales Person created successfully",
	// 		});
	// 	});
	// }
}

function editUser(eachUser: SalesPerson) {
	Object.assign(salesPerson.value, eachUser);
	salesPerson.value.active = !!eachUser.active;
}

// ToDo: Uncomment content when services are defined
function searchByAddress() {
	// if (salesPerson.value.address_one) {
	// 	CustomerDataService.fetchAddressBycustomer(salesPerson.value.address_one).then(
	// 		(resp) => {
	// 			if (resp && resp.data) {
	// 				openModal(resp);
	// 			}
	// 		},
	// 	);
	// } else {
	// 	fetchCustomerList();
	// }
}

// ToDo: Uncomment content when services are defined
function fetchCustomerList() {
	// CustomerDataService.getCustomer().then((resp) => {
	// 	if (resp && resp.data) {
	// 		openModal(resp);
	// 	}
	// });
}

function openModal(resp: any) {
	modalData.value = resp.data;
	// //$bvModal.show('modal-search');
}

function onValueChange(value: any) {
	salesPerson.value.address_one = value.address_one;
	// //$bvModal.hide('modal-search');
}

function refreshForm() {
	salesPerson.value = new SalesPerson();
	// $refs.observer.reset();
	getSalesPerson();
	submitDisabled.value = false;
}

function disableButton() {
	return new Promise((resolve) => {
		submitDisabled.value = true;
		resolve("resolved");
	});
}

function clearForm(e: any) {
	e.preventDefault();
	// $refs.observer.reset();
	salesPerson.value = new SalesPerson();
	submitDisabled.value = false;
}
</script>

<template>
	<!-- <ValidationObserver ref="observer" v-slot="{ handleSubmit }"> -->
	<form @submit.prevent="onSubmit">
		<!-- <form @submit.prevent="handleSubmit(onSubmit)"> -->
		<div class="row align-items-center">
			<div class="col d-flex align-items-center">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Sales Person</h5>
				</div>
				<div class="float-left">
					<button
						type="button"
						class="btn mr-3 mb-4 btn-yellow"
						@click="clearForm"
					>
						New
					</button>
					<button
						type="submit"
						class="btn mr-4 mb-4 btn-black"
						:disabled="submitDisabled"
					>
						{{ salesPerson.id ? "Update" : "Save" }}
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-12 col-lg-12 my-4">
				<div class="card">
					<div class="card-body">
						<div>
							<div class="row">
								<div class="col-12 col-md-6 mb-md-0">
									<div class="form-group">
										<CustomTextInputValidation
											v-model="salesPerson.first_name"
											name="First Name"
											placeholder="Fitst Name"
											autocomplete="Fitstname"
											:field-input.sync="salesPerson.first_name"
											rules="required|minmax:1,50"
										/>
									</div>
								</div>
								<div class="col-12 col-md-6 mb-md-0">
									<div class="form-group">
										<CustomTextInputValidation
											v-model="salesPerson.last_name"
											name="Last Name"
											placeholder="Last Name"
											autocomplete="Lastname"
											:field-input.sync="salesPerson.last_name"
											rules="required|minmax:1,50"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12 col-md-6 mb-md-0">
									<!-- <ValidationProvider
										v-slot="{ errors }"
										name="Address"
										rules="required"
									> -->
									<div class="input-group">
										<input
											v-model="salesPerson.address_one"
											type="text"
											class="form-control"
											placeholder="Address1"
										/>
										<div class="input-group-append bg-light py-0">
											<button
												class="btn btn-outline-secondary"
												type="button"
												@click="searchByAddress()"
											>
												<i class="material-icons">search</i>
											</button>
										</div>
									</div>
									<div v-if="errors.length > 0" class="error-holder flex-row">
										<span class="error-text">{{ errors[0] }}</span>
									</div>
									<!-- </ValidationProvider> -->
								</div>
								<div class="col-12 col-md-6 mb-md-0">
									<div class="form-group">
										<CustomTextInputValidation
											v-model="salesPerson.address_two"
											name="Address2"
											placeholder="Address2"
											autocomplete="Address2"
											:field-input.sync="salesPerson.address_two"
											rules="minmax:1,50"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12 col-md-6 mb-md-0">
									<div class="form-group">
										<CustomTextInputValidation
											v-model="salesPerson.address_city"
											name="City"
											placeholder="City"
											autocomplete="City"
											:field-input.sync="salesPerson.address_city"
											rules="required|minmax:1,50"
										/>
									</div>
								</div>
								<div class="col-12 col-md-3 mb-md-0">
									<div class="form-group">
										<!-- <ValidationProvider
											v-slot="{ errors }"
											name="State"
											rules="required"
										> -->
										<b-form-select
											v-model="salesPerson.address_state"
											class="w-100 form-control"
											:options="stateListOptions"
										/>
										<div v-if="errors.length > 0" class="error-holder flex-row">
											<span class="error-text">{{ errors[0] }}</span>
										</div>
										<!-- </ValidationProvider> -->
									</div>
								</div>
								<div class="col-12 col-md-3 mb-md-0">
									<div class="form-group">
										<CustomTextInputValidation
											v-model="salesPerson.address_zip"
											name="zip"
											placeholder="Zip + 4"
											autocomplete="zip"
											:field-input.sync="salesPerson.address_zip"
											rules="required|minmax:5,10"
										/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12 col-md-6 mb-md-0">
									<div class="form-group">
										<CustomTextInputValidation
											v-model="salesPerson.email"
											name="Company Email"
											placeholder="Company Email"
											autocomplete="company_email"
											:field-input.sync="salesPerson.email"
											rules="required|email|minmax:1,40"
										/>
									</div>
								</div>
								<div class="col-12 col-md-3 mb-md-0">
									<div class="form-group">
										<input
											v-model="salesPerson.ext"
											name="Ext"
											label
											placeholder="Ext"
											type="text"
											class="form-control"
											autocomplete="Ext"
										/>
									</div>
								</div>
								<div class="col-12 col-md-3 mb-md-0">
									<!-- rules="required" -->
									<!-- <ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										name="Commission"
										:rules="{
											required: true,
											regex: /^\d{0,9}(\.?\d{1,2})?$/,
										}"
									> -->
									<input
										v-model="salesPerson.commission"
										name="Commission"
										label
										placeholder="Commission"
										type="text"
										autocomplete="Commission"
										class="form-control"
									/>
									<div class="error-holder flex-row">
										<span class="error-text">{{ errors[0] }}</span>
									</div>
									<!-- </ValidationProvider> -->
								</div>
							</div>
							<div class="row">
								<div class="col-12 col-md-6" />
								<div class="col-12 col-md-6">
									<div class="form-group">
										<!-- <Checkbox
											v-model="salesPerson.active"
											:checked="salesPerson.active"
											label="Active"
										/> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-12">
				<div class="card">
					<div class="card-body">
						<table v-if="userData.length > 0" class="table table-hover">
							<thead class="grey lighten-2">
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Address</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="eachUser in userData" :key="eachUser.id">
									<td>
										<a class="custom-link" @click="editUser(eachUser)"
											>{{ eachUser.first_name }} {{ eachUser.last_name }}</a
										>
									</td>
									<td>{{ eachUser.email }}</td>
									<td>{{ eachUser.address_one }} {{ eachUser.address_two }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div>
			<CommonSearchModal
				:data="modalData"
				:title="'Address'"
				@onSelect="onValueChange"
			/>
		</div>
	</form>
	<!-- </ValidationObserver> -->
</template>

<style scoped lang="scss">
.pagination-box {
	display: block;
	float: right;
}
</style>
