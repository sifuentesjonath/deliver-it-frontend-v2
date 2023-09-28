<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

// import { email } from 'vee-validate/dist/rules';
import CustomTextInput from "@/components/inputs/CustomTextInput.vue";
import CustomTextInputValidation from "@/components/inputs/CustomTextInputValidation.vue";
// import Checkbox from "@/components/inputs/Checkbox.vue";
import { Company } from "../../model/Company";
import {
	defaultTimeZones,
	defaultStateListOptions,
	defaultCompanyTypeOptions,
} from "../../constants/common-options";

// ToDo: Define these
// import CompanyDataService from "../services/api/CompanyDataService";
// import { utility } from "../components/utils/utility";
// import ToasterService from "../services/api/ToasterService";

// extend('email', {
//   // ...email,
//   message: 'Please enter a valid email.',
// });
// extend('minmax', {
//   validate(value, args: any) {
//     const { length } = value;

//     return length >= args.min && length <= args.max;
//   },
//   params: ['min', 'max'],
//   message: () => 'The code must be of 5 characters',
// });

const error = ref("");

const company = ref(new Company());

const submitDisabled = ref(false);

const companyData: Ref<any[]> = ref([]);

const timeZoneOptions = ref(defaultTimeZones);

const companyTypeOptions = ref(defaultCompanyTypeOptions);

const stateListOptions = ref(defaultStateListOptions);

const errors: string[] = []; // ToDo: Remove later, it's a temp fix

// $refs!: {
//   observer: InstanceType<typeof ValidationObserver>;
// };

// @Action('company/companies') companyAction: any;

// @Getter('company/getCompanies') getCompaniesData: any;

onMounted(() => {
	getCompanies();
});

function getCompanies() {
	// this.companyAction().then(() => {
	//   this.companyData = this.getCompaniesData;
	// });
}

function editCompany(eachCompany: Company) {
	// this.$refs.observer.reset();
	Object.assign(company.value, company.value.setCompanyData(eachCompany));
}

// ToDo: Uncomment content when services are defined
function onSubmit() {
	// let request = company.value.mapToRequest();
	// submitDisabled.value = true;
	// if (request.id) {
	// 	CompanyDataService.editCompany(request).then((resp) => {
	// 		if (resp && resp.data) {
	// 			this.refreshForm();
	// 			ToasterService.success({
	// 				message: "Company Detail updated successfully!",
	// 			});
	// 		}
	// 	});
	// } else {
	// 	request = utility.excludeEmptykey(request);
	// 	CompanyDataService.createCompany(request).then((resp) => {
	// 		if (resp && resp.data) {
	// 			refreshForm();
	// 			ToasterService.success({
	// 				message: "Company Detail created successfully!",
	// 			});
	// 		}
	// 	});
	// }
}

function disableButton() {
	return new Promise((resolve) => {
		submitDisabled.value = true;
		resolve("resolved");
	});
}

function refreshForm() {
	company.value = new Company();
	// this.$refs.observer.reset();
	getCompanies();
	submitDisabled.value = false;
}

function setError(text: string) {
	error.value = text;
}
</script>

<template>
	<div class="container-fluid">
		<!-- <ValidationObserver ref="observer" v-slot="{ handleSubmit }"> -->
		<!-- <form form="company" @submit.prevent="handleSubmit(onSubmit)"> -->
		<form form="company">
			<div class="company-heading">
				<h5>Company Setup</h5>
				<button class="yellow-button" type="button" @click="refreshForm">New</button>
				<button class="black-button" type="submit" :disabled="submitDisabled">
					{{ company.id ? "Update" : "Save" }}
				</button>
			</div>

			<div class="container-box company-fulfilling">
				<CustomTextInputValidation
					v-model="company.code"
					name="Code"
					label="Code"
					type="text"
					autocomplete="code"
					:field-input.sync="company.code"
					rules="required|minmax:1,5"
				/>
				<CustomTextInputValidation
					v-model="company.name"
					:field-input.sync="company.name"
					name="Segment"
					label="Segment Description"
					autocomplete="segment"
					rules="required"
				/>
				<!-- <ValidationProvider v-slot="{ errors }" name="Type" rules="required"> -->
				<div class="company-fulfilling-type">
					<label for="type" class="control-label">Type</label>
					<b-form-select
						v-model="company.type_id"
						class="w-100 form-control"
						:options="companyTypeOptions"
					/>
					<div v-if="errors.length > 0" class="error-holder flex-row">
						<span class="error-text">{{ errors[0] }}</span>
					</div>
				</div>
				<!-- </ValidationProvider> -->
				<!-- <Checkbox
					id="companyCheckbox"
					v-model="company.active"
					name="company"
					value="1"
					label="Enabled"
					:checked="company.active"
				/> -->
			</div>

			<div class="company-details-fulfilling">
				<div class="container-box">
					<h5>Physical Address</h5>
					<div class="form-group">
						<CustomTextInputValidation
							v-model="company.address_name"
							name="Name"
							placeholder="Name"
							autocomplete="type"
							:field-input.sync="company.address_name"
							rules="required|minmax:1,255"
						/>
						<CustomTextInputValidation
							v-model="company.address_dba"
							name="DBA Name"
							placeholder="DBA Name"
							autocomplete="type"
							:field-input.sync="company.address_dba"
							rules="required|minmax:1,255"
						/>
						<CustomTextInputValidation
							v-model="company.address_one"
							:field-input.sync="company.address_one"
							name="Physical Address 1"
							placeholder="Address 1"
							autocomplete="type"
							rules="required|minmax:1,255"
						/>
						<input
							v-model="company.address_two"
							class="form-control"
							name="address_2"
							label
							placeholder="Address 2"
							type="text"
							autocomplete="type"
						/>
						<CustomTextInputValidation
							v-model="company.address_city"
							:field-input.sync="company.address_city"
							name="Physical Address City"
							placeholder="City"
							autocomplete="type"
							rules="required|minmax:1,255"
						/>
					</div>
				</div>
				<div class="container-box">
					<h5>Mailing Address</h5>
					<div class="form-group">
						<CustomTextInputValidation
							v-model="company.mailing_address_name"
							:field-input.sync="company.mailing_address_name"
							name="Mailing Name"
							placeholder="Name"
							autocomplete="type"
							rules="required|minmax:1,255"
						/>
						<CustomTextInputValidation
							v-model="company.mailing_address_dba"
							:field-input.sync="company.mailing_address_dba"
							name="Mailing DBA Name"
							placeholder="DBA Name"
							autocomplete="type"
							rules="required|minmax:1,255"
						/>
						<CustomTextInputValidation
							v-model="company.mailing_address_one"
							:field-input.sync="company.mailing_address_one"
							name="Mailing Address 1"
							placeholder="Address 1"
							autocomplete="type"
							rules="required|minmax:1,255"
						/>
						<input
							v-model="company.mailing_address_two"
							class="form-control"
							name="mailing_address_2"
							label
							placeholder="Address 2"
							type="text"
							autocomplete="type"
						/>
						<CustomTextInputValidation
							v-model="company.mailing_address_city"
							:field-input.sync="company.mailing_address_city"
							name="Mailing City"
							placeholder="City"
							autocomplete="type"
							rules="required|minmax:1,255"
						/>
						<!-- <ValidationProvider
											v-slot="{ errors }"
											name="Mailing State"
											rules="required"
										> -->
						<!-- <b-form-select
							v-model="company.mailing_address_state"
							class="w-100 form-control"
							:options="stateListOptions"
						/>
						<div v-if="errors.length > 0" class="error-holder flex-row">
							<span class="error-text">{{ errors[0] }}</span>
						</div> -->
						<!-- </ValidationProvider> -->
						<CustomTextInputValidation
							v-model="company.mailing_address_zip"
							:field-input.sync="company.mailing_address_zip"
							name="Mailing Zip"
							placeholder="Zip"
							autocomplete="type"
							rules="required|minmax:1,10"
						/>
					</div>
				</div>
				<div class="container-box">
					<h5>Other info</h5>
					<div class="form-group">
						<CustomTextInputValidation
							v-model="company.primary_email"
							:field-input.sync="company.primary_email"
							name="Primary Email"
							placeholder="Primary Email"
							autocomplete="type"
							rules="required|email"
						/>
						<input
							v-model="company.secondary_email"
							name="secondary_email"
							label
							placeholder="Secondary Email"
							type="text"
							class="form-control"
							autocomplete="type"
						/>
						<input
							v-model="company.accounting_email"
							class="form-control"
							name="accounting_email"
							label
							placeholder="Accounting Email"
							type="text"
							autocomplete="type"
						/>
						<input
							v-model="company.tax_id"
							class="form-control"
							name="tax_id"
							label
							placeholder="Tax ID"
							type="text"
							autocomplete="type"
						/>
						<input
							v-model="company.sic_code"
							class="form-control"
							name="sic_code"
							label
							placeholder="SIC Code"
							type="text"
							autocomplete="type"
						/>

						<!-- <ValidationProvider
									v-slot="{ errors }"
									name="Timezone"
									rules="required"
								> -->
						<!-- <b-form-select
							v-model="company.timezone"
							class="w-100 form-control"
							:options="timeZoneOptions"
						/>
						<div v-if="errors.length > 0" class="error-holder flex-row">
							<span class="error-text">{{ errors[0] }}</span>
						</div> -->
						<!-- </ValidationProvider> -->
					</div>
				</div>
			</div>
		</form>
		<!-- </ValidationObserver> -->

		<!-- TODO: check this rendering once we can fetch companies -->
		<!-- <div class="row mt-4">
			<div class="col-12 col-lg-12">
				<div class="card">
					<div v-if="companyData.length > 0" class="card-body">
						<table class="table table-hover">
							<thead class="grey lighten-2">
								<tr>
									<th>Code</th>
									<th>Name</th>
									<th>Status</th>
									<th>Type</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr v-for="eachCompany in companyData" :key="eachCompany.id">
									<td>{{ eachCompany.code }}</td>
									<td>{{ eachCompany.name }}</td>
									<td>
										{{ eachCompany.active === true ? "Active" : "Inactive" }}
									</td>
									<td>{{ eachCompany.type.name }}</td>
									<td>
										<i
											class="material-icons cursor-pointer"
											@click="editCompany(eachCompany)"
											>edit</i
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<style scoped lang="scss">
@import "../../sass/variables.scss";
@import "../../assets/customStyles.scss";
.company-heading {
	display: flex;
	gap: 16px;
	align-items: center;
	margin-bottom: 32px;
}
.company-fulfilling {
	display: flex;
	gap: 24px;
	align-items: center;
	margin-bottom: 32px;
	.input-section:first-child {
		width: 190px;
	}
	.input-section:nth-child(2) {
		width: 390px;
	}
	.company-fulfilling-type {
		width: 180px;
	}
}

.company-details-fulfilling {
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(3, 1fr);
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
</style>
