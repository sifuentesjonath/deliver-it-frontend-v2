<script setup lang="ts">
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
// import CustomTextInput from "@/components/inputs/CustomTextInput.vue";
// import CustomTextInputValidation from "@/components/inputs/CustomTextInputValidation.vue";
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
// import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue';
// import Checkbox from "@/components/inputs/Checkbox.vue";
// import ServiceAvailabilityComponent from "@/views/components/ServiceAvailabilityComponent.vue";
// import CustomDropdown from "@/components/global/CustomDropdown.vue";
// import WarningModal from "@/components/modal/WarningModal.vue";
// import { Service } from "../model/service";
// import { Zone } from "../model/zone";
// import { Rate } from "../model/rate";
import {
	defaultMethods,
	defaultZones,
	defaultTypes,
	defaultServiceType,
	defaultWeekDays,
} from "../../constants/common-options";

// ToDo: Define these
// import ServiceSetupDataService from "../services/api/ServiceSetupDataService";
// import { utility } from "../components/utils/utility";
// import RateDataService from "../services/api/RateDataService";
// import ToasterService from "../services/api/ToasterService";

import { ref, onMounted, type Ref } from "vue";

// extend('minmax', {
//   validate(value, args: any) {
//     const { length } = value;

//     return length >= args.min && length <= args.max;
//   },
//   params: ['min', 'max'],
//   message: '{_field_} format is invalid.',
// });

// actions
// @Action('terminal/terminals') terminalAction: any;

// @Getter('terminal/getTerminials') getTerminals: any;

// @Action('company/companies') companyAction: any;

// @Getter('company/getCompanies') getCompaniesData: any;

// @Action('zone/zones') zoneAction: any;

// @Getter('zone/getZones') getZones: any;

// data
const error: string = "";

const weekDays = JSON.parse(JSON.stringify(defaultWeekDays));

const terminals = ref([]);

const companyTypeOptions = ref([]);

const methodsOptions = ref(defaultMethods);

const typeOptions = ref(defaultTypes);

const serviceTypeOptions = defaultServiceType;

const zoneOptions = defaultZones;

const submitDisabled = ref(false);

// const service = ref(new Service());

// const zones = ref(new Zone());

// const rateObj = ref(new Rate());

const zone = {
	id: "",
	name: "Select Zone",
};

onMounted(() => {
	// service.value.isCustomer = false;
	// initializeTerminals();
	// initializeCompanies();
	// initializeZones();
});

const serviceDataList: Ref<any[]> = ref([]);

const zoneFlag = ref(true);

const base_rateFlag = ref(true);

const file = null;

const warningContent = ref("");

const isRedirect = ref(true);

const disableRatingType = ref(false);

// computed
function hasRatesOption(): boolean {
	// return (
	// 	!!serviceDataList.value &&
	// 	!!serviceDataList.value.length &&
	// 	!!serviceDataList.value[0].rates &&
	// 	!!serviceDataList.value[0].rates.length
	// );
}

// lifecycle
function created() {
	// service.id = $route.query.id;
	// if (service.id) {
	//   getServiceById(service.id);
	// }
}

// methods
async function initializeTerminals() {
	// if (!getTerminals || !getTerminals.length) {
	//   await terminalAction();
	// }
	// terminals = utility.mapCustomDropdown(
	//   'text',
	//   'value',
	//   getTerminals,
	//   'Select',
	// );
}

async function initializeZones() {
	// if (!getZones || !getZones.length) {
	//   await zoneAction();
	// }
	// zones = utility.mapCustomDropdown(
	//   'text',
	//   'value',
	//   getZones,
	//   'Select Zone',
	// );
}

async function initializeCompanies() {
	// if (!getCompaniesData || !getCompaniesData.length) {
	//   await companyAction();
	// }
	// companyTypeOptions = utility.mapCustomDropdown(
	//   'text',
	//   'value',
	//   getCompaniesData,
	//   'Select',
	// );
}

function onChangeActive(checked: boolean) {
	// if (!checked) {
	// 	warningContent.value =
	// 		"WARNING!! You about to deactivate this service for ALL customers!";
	// 	// //$bvModal.show('bv-modal-warning');
	// } else {
	// 	warningContent.value = "";
	// }
}

function deactivateRating() {
	// service.value.active = false;
}

function activateRating() {
	// service.value.active = true;
}

function getServiceById(id: any) {
	// serviceDataList.value = [];
	// ServiceSetupDataService.getServiceById(id).then((res) => {
	// 	if (res && typeof res.data === "object") {
	// 		serviceDataList.push(res.data);
	// 		weekDays.forEach((item: any) => {
	// 			if (res.data.available_days) {
	// 				if (res.data.available_days.includes(item.name)) {
	// 					item.value = true;
	// 				}
	// 			}
	// 		});
	// 		Object.assign(service, service.value.setServiceSetupData(res.data, true));
	// 	}
	// });
}

// setError(text: string) {
//   error = text;
// }

function setResponse(res: any) {
	// weekDays.forEach((item: any) => {
	// 	if (res.data.data.available_days) {
	// 		if (res.data.data.available_days.includes(item.name)) {
	// 			item.value = true;
	// 		}
	// 	}
	// });
	// Object.assign(service, service.value.setServiceSetupData(res.data.data, true));
}

function checkRateApiCall() {
	// if (!rateObj.value.base_rate) {
	// 	return false;
	// }
	// return true;
}

function serviceRateUpdate() {
	// ($refs.submitButton as HTMLElement).click();
}

// ToDo: Uncomment content when services are defined
function updateRateData() {
	// let request = rateObj.value.mapToRequest();
	// request = utility.excludeEmptykey(rateObj);
	// request.service_id = service.id;
	// if (request.id) {
	// 	RateDataService.editRate(request).then((resp) => {
	// 		if (resp && resp.data) {
	// 			initializeRateObject();
	// 			serviceDataList.forEach((element: any) => {
	// 				element.rates.splice(
	// 					element.rates.findIndex((item: any) => request.id === item.id),
	// 					1,
	// 					resp.data,
	// 				);
	// 				ToasterService.success({ message: "Rates updated successfully" });
	// 			});
	// 		}
	// 	});
	// } else {
	// 	RateDataService.createRateWithoutFile(request).then((resp) => {
	// 		if (resp && resp.data) {
	// 			initializeRateObject();
	// 			serviceDataList.forEach((element: any) => {
	// 				element.rates.push(resp.data);
	// 			});
	// 			ToasterService.success({ message: "Rates added successfully" });
	// 		}
	// 	});
	// }
}

// ToDo: Uncomment content when services are defined
function deleteRate(data: any) {
	// RateDataService.deleteRate(data.id).then((resp) => {
	// 	if (resp && resp.data.message === "Success") {
	// 		serviceDataList.value.forEach((element: any) => {
	// 			element.rates.splice(
	// 				element.rates.findIndex((item: any) => data.id === item.id),
	// 				1,
	// 			);
	// 		});
	// 	}
	// });
}

function initializeRateObject() {
	// const tempObj = rateObj;
	// rateObj.value = new Rate();
	// if (zoneFlag && base_rateFlag) {
	// 	rateObj.value.zone_id = tempObj.value.zone_id ? tempObj.value.zone_id : "";
	// 	rateObj.value.base_rate = tempObj.value.base_rate;
	// } else if (zoneFlag && !base_rateFlag) {
	// 	rateObj.value.zone_id = tempObj.value.zone_id;
	// } else if (!zoneFlag && base_rateFlag) {
	// 	rateObj.value.base_rate = tempObj.value.base_rate;
	// }
}

function editRate(data: any) {
	// Object.assign(rateObj, rateObj.value.setRateData(data));
}

function onZoneKeep(value: boolean) {
	// zoneFlag.value = value;
}

function onBaseRateKeep(value: boolean) {
	// base_rateFlag.value = value;
}

function refreshForm() {
	// service.value = new Service();
	// submitDisabled.value = false;
	// serviceDataList.value = [];
}

function handleFileUpload(file: any) {
	// const formData = new FormData();
	// if (!file) return;
	// formData.append("file", file, file.name);
	// formData.append("service_id", service.value.id);
	// saveUpload(formData);
}

// ToDo: Uncomment content when services are defined
function saveUpload(data: any) {
	// RateDataService.createRate(data).then((resp) => {
	// 	if (resp && resp.message === "Success") {
	// 		serviceDataList.value = [];
	// 		getServiceById(service.value.id);
	// 	}
	// });
}
// ToDo: Uncomment content when services are defined
function downloadRateSheet() {
	// const serviceId = service.value.id;
	// RateDataService.downloadRate(serviceId).then((resp) => {
	// 	if (resp && resp.status === 200) {
	// 		const ext = ".xlsx";
	// 		utility.convertBufferDataToFile(resp.data, ext);
	// 	}
	// });
}

function handleBlur(params: any) {
	// let check: boolean = false;
	// switch (params) {
	// 	case "Rate":
	// 		if (rateObj.value.from !== null && rateObj.value.to !== null) {
	// 			check = compareData(rateObj.value.from, rateObj.value.to, params);
	// 			if (!check) {
	// 				rateObj.value.from = null;
	// 				rateObj.value.to = null;
	// 			}
	// 		}
	// 		break;
	// 	default:
	// 		console.log("No such fields");
	// }
}

// ToDo: Uncomment content when services are defined
function compareData(value1: any, value2: any, params?: any) {
	// const fromValue = Number(value1);
	// const toValue = Number(value2);
	// if (hasRatesOption()) {
	// 	const { rates } = serviceDataList.value[0];
	// 	const latestRate = rates.reduce((prev: any, curr: any) => {
	// 		return prev.to > curr.to ? prev : curr;
	// 	});
	// 	if (fromValue !== latestRate.to + 1) {
	// 		ToasterService.error(
	// 			`${params} from value must equal to ${latestRate.to + 1}`,
	// 		);
	// 		return false;
	// 	}
	// }
	// if (+fromValue < +toValue) {
	// 	return true;
	// }
	// ToasterService.error(
	// 	`${params} from value must be smaller than ${params} to value`,
	// );
	// return false;
	return true; // ToDo: Remove later, it's a temp fix
}

// ToDo: Uncomment content when services are defined
// form events
function onSubmit() {
	// let request = service.value.mapToRequest();
	// request.available_days = [];
	// weekDays.forEach((obj: any) => {
	// 	if (obj.value) {
	// 		request.available_days.push(obj.name);
	// 	}
	// });
	// submitDisabled.value = true;
	// if (request.id) {
	// 	ServiceSetupDataService.editService(request).then((res) => {
	// 		if (res && res.status === 200) {
	// 			refreshForm();
	// 			serviceDataList.push(res.data.data);
	// 			setResponse(res);
	// 			if (isRedirect) {
	// 				// $router.push({ name: 'serviceSetup' });
	// 			} else if (checkRateApiCall()) {
	// 				updateRateData();
	// 			}
	// 			ToasterService.success({
	// 				message: "Service updated successfully",
	// 			});
	// 		}
	// 		submitDisabled.value = false;
	// 	});
	// } else {
	// 	request = utility.excludeEmptykey(request);
	// 	ServiceSetupDataService.createService(request).then((res) => {
	// 		if (res && res.status === 201) {
	// 			refreshForm();
	// 			serviceDataList.push(res.data.data);
	// 			setResponse(res);
	// 			if (checkRateApiCall()) {
	// 				updateRateData();
	// 			}
	// 			ToasterService.success({
	// 				message: "Service created successfully",
	// 			});
	// 		}
	// 		submitDisabled.value = false;
	// 	});
	// }
}
// ToDo: Fix this magic number
function onRatingMethodChange(value: string | number) {
	// if (value === 1) {
	// 	disableRatingType.value = true;
	// } else {
	// 	disableRatingType.value = false;
	// }
}
</script>

<template>
	<div class="container-fluid">
		<!-- <ValidationObserver ref="form" v-slot="{ handleSubmit }">
			<form ref="form" @submit.prevent="handleSubmit(onSubmit)">
				<div class="row align-items-center">
					<div class="col d-flex align-items-center">
						<div class="float-left mr-2">
							<h5 class="px-2 mb-3 cs-main-heading">Service Setup</h5>
						</div>
						<div class="float-left">
							<button
								v-if="!service.id"
								type="button"
								class="btn mr-3 mb-4 btn-yellow"
								@click="refreshForm()"
							>
								New
							</button>
							<button
								ref="submitButton"
								type="submit"
								class="btn mr-4 mb-4 btn-black"
								:disabled="submitDisabled"
								@click="isRedirect = true"
							>
								{{ service.id ? "Update" : "Save" }}
							</button>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-sm-6 col-md-6 col-lg-6">
						<div class="d-flex">
							<div class="col-12">
								<h5 class="panel-header">Basic Information</h5>
								<div class="card">
									<div class="card-body">
										<div class="form-group">
											<CustomTextInputValidation
												v-model="service.name"
												name="service_name"
												label="Service Name"
												autocomplete="service_name"
												:field-input.sync="service.name"
												rules="required"
											/>
										</div>
										<div class="form-group">
											<CustomTextInputValidation
												v-model="service.description"
												name="service_description"
												label="Service Description"
												autocomplete="service_description"
												:field-input.sync="service.description"
												rules="required"
											/>
										</div>
										<div class="form-group">
											<CustomTextInputValidation
												v-model="service.code"
												:field-input.sync="service.code"
												name="code"
												label="Code"
												autocomplete="code"
												rules="required|minmax:0,4"
											/>
										</div>
										<div class="form-group">
											<label class="control-label">Assign to Terminal</label>
											<b-form-select
												v-model="service.terminal_id"
												class="w-100"
												:options="terminals"
											/>
										</div>
										<div class="form-group">
											<label class="control-label">Assign to Segment</label>
											<b-form-select
												v-model="service.company_id"
												class="w-100"
												:options="companyTypeOptions"
											/>
										</div>
										<div class="form-group">
											<ValidationProvider v-slot="{ errors }" rules="required">
												<label class="control-label">Type</label>
												<b-form-select
													v-model="service.service_type_id"
													class="w-100"
													:options="serviceTypeOptions"
												/>
												<div v-if="errors.length > 0" class="error-holder flex-row">
													<span class="error-text">{{ errors[0] }}</span>
												</div>
											</ValidationProvider>
										</div>
									</div>
								</div>
								<div class="mt-2">
									<div class="card">
										<div id="accordionExample" class="accordion">
											<div class="card">
												<div id="headingOne" class="card-header">
													<h5 class="mb-0">
														<button
															class="btn btn-link"
															type="button"
															data-toggle="collapse"
															data-target="#collapseOne"
															aria-expanded="true"
															aria-controls="collapseOne"
														>
															Service Availability
														</button>
													</h5>
												</div>
												<div
													id="collapseOne"
													class="collapse show"
													aria-labelledby="headingOne"
													data-parent="#accordionExample"
												>
													<div class="card">
														<div class="card-body">
															<ServiceAvailabilityComponent
																:service="service"
																:week-days="weekDays"
															/>
														</div>
													</div>
												</div>
											</div>
											<div class="card">
												<div id="headingTwo" class="card-header">
													<h5 class="mb-0">
														<button
															class="btn btn-link collapsed"
															type="button"
															data-toggle="collapse"
															data-target="#collapseTwo"
															aria-expanded="false"
															aria-controls="collapseTwo"
														>
															Service Due Time
														</button>
													</h5>
												</div>
												<div
													id="collapseTwo"
													class="collapse"
													aria-labelledby="headingTwo"
													data-parent="#accordionExample"
												>
													<div class>
														<div class="card">
															<div class="card-body">
																<div class="row">
																	<div class="col-md-6 col-12 mb-md-0">
																		<h5 class="card-title mb-5">Due Time</h5>
																	</div>
																</div>
																<div class="row">
																	<div class="col-md-6 col-12 mb-md-0">
																		<div class="form-group w-100">
																			<vue-timepicker
																				v-model="service.due_time"
																				format="HH:mm"
																				placeholder="Due Time"
																			/>
																		</div>
																	</div>
																	<div class="col-md-6 col-12 mb-md-0">
																		<div class="form-group">
																			<Checkbox
																				id="nightEntry"
																				v-model="service.night_entry"
																				name="nightEntry"
																				:value="true"
																				label="Include Night Entry"
																				:checked="service.night_entry"
																			/>
																		</div>
																	</div>
																</div>
																<div class="row">
																	<div class="col-md-6 col-12 mb-md-0">
																		<div class="form-group">
																			<input
																				v-model="service.time_past_ready"
																				class="form-control"
																				name="timePast"
																				label
																				type="Number"
																				placeholder="Time Past Ready"
																				autocomplete="timePast"
																			/>
																		</div>
																	</div>
																	<div class="col-md-6 col-12 mb-md-0">
																		<div class="form-group">
																			<Checkbox
																				id="countWeekend"
																				v-model="service.count_weekends"
																				name="countWeekend"
																				:value="true"
																				label="Count Weekends"
																				:checked="service.count_weekends"
																			/>
																		</div>
																		<div class="form-group">
																			<Checkbox
																				id="countWeekend"
																				v-model="service.count_holidays"
																				name="countHoliday"
																				:value="true"
																				label="Exclude Holidays"
																				:checked="service.count_holidays"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-6 col-sm-12 col-md-6 no-padding">
						<div class="d-flex">
							<div class="col-12 no-padding">
								<h5 class="panel-header">Rating</h5>
								<div class="card">
									<div class="card-body">
										<template>
											<div class="row mt-3">
												<div class="col-12 col-lg-6">
													<ValidationProvider
														v-slot="{ errors }"
														vid="method"
														rules="required"
													>
														<b-form-select
															v-model="service.rate_method_id"
															class="w-100"
															:options="methodsOptions"
															name="method"
															:disabled="hasRatesOption"
															@change="onRatingMethodChange"
														/>
														<div v-if="errors.length > 0" class="error-holder flex-row">
															<span class="error-text">{{ errors[0] }}</span>
														</div>
													</ValidationProvider>
												</div>
												<div class="col-12 col-lg-6">
													<ValidationProvider
														v-slot="{ errors }"
														name="Type"
														rules="required_if:method,2,3,4"
													>
														<b-form-select
															v-model="service.rate_type_id"
															class="w-100"
															:options="typeOptions"
															name="type"
															:disabled="disableRatingType"
														/>
														<div v-if="errors.length > 0" class="error-holder flex-row">
															<span class="error-text">{{ errors[0] }}</span>
														</div>
													</ValidationProvider>
												</div>
											</div>
										</template>
										<div class="row align-items-center mt-3">
											<div class="col-md-6 col-12 mb-md-0">
												<div class="form-group">
													<label for="">Minimum Order Fee</label>
													<input
														v-model="service.minimum_order_fee"
														name="Minimum Order Fee"
														type="text"
														autocomplete="minimumOrder"
														class="form-control"
														:disabled="hasRatesOption"
													/>
												</div>
											</div>
											<div class="col-md-6 col-12 mb-md-0 mt-2">
												<div class="form-group">
													<Checkbox
														v-model="service.active"
														:checked="service.active"
														label="Active"
														:disabled="hasRatesOption"
														@input="onChangeActive"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div class="mt-4">
										<div class="card">
											<div class="card-body">
												<form>
													<div class="">
														<div class="col-12 text-right">
															<label>
																<input
																	id="file"
																	type="file"
																	style="display: none"
																	accept=".xls,.xlsx"
																	@change="
																		// ToDo: Adjust this
																		// handleFileUpload($event.target.files[0])
																	"
																/>
																<a class="custom-link mb-3 add_button collapsed mr-3"
																	>Upload</a
																>
															</label>
														</div>
														<div class="row align-items-center">
															<div class="col-md-6 col-12 mb-md-0">
																<div class="form-group dropdown">
																	<b-form-select
																		v-model="rateObj.zone_id"
																		class="w-100 form-control"
																		:options="zones"
																		:disabled="service.rate_method_id !== 3"
																	/>
																</div>
															</div>
															<div class="col-md-6 col-12 mb-md-0">
																<div class="form-group">
																	<Checkbox
																		:checked="true"
																		label="Keep"
																		:disabled="service.rate_method_id === 1"
																		@input="onZoneKeep"
																	/>
																</div>
															</div>
														</div>
														<div class="row align-items-center">
															<div class="col-md-6 col-12 mb-md-0">
																<div class="form-group">
																	<input
																		v-model="rateObj.base_rate"
																		type="text"
																		class="form-control"
																		aria-label="Amount (to the nearest dollar)"
																		placeholder="Base Rate"
																	/>
																</div>
															</div>
															<div class="col-md-6 col-12 mb-md-0">
																<div class="form-group">
																	<Checkbox
																		:checked="true"
																		label="Keep"
																		:disabled="service.rate_method_id === 1"
																		@input="onBaseRateKeep"
																	/>
																</div>
															</div>
														</div>
														<div class="d-flex mt-3 px-0 align-items-center">
															<div class="col-4 p-0">
																<input
																	v-model="rateObj.from"
																	type="text"
																	class="form-control"
																	aria-label="Amount (to the nearest dollar)"
																	placeholder="From"
																	:disabled="service.rate_method_id === 1"
																	@blur="handleBlur('Rate')"
																/>
															</div>
															<div class="col-4">
																<input
																	v-model="rateObj.to"
																	type="text"
																	class="form-control"
																	aria-label="Amount (to the nearest dollar)"
																	placeholder="To"
																	:disabled="service.rate_method_id === 1"
																	@blur="handleBlur('Rate')"
																/>
															</div>
															<div class="col-4 p-0">
																<input
																	v-model="rateObj.increment"
																	type="text"
																	class="form-control"
																	aria-label="Amount (to the nearest dollar)"
																	placeholder="Increment"
																	:disabled="service.rate_method_id === 1"
																/>
															</div>
														</div>
														<div class="col-12 text-right mt-3">
															<button
																type="button"
																class="btn ml-2 mt-2 mt-md-0 btn-black"
																:disabled="submitDisabled"
																@click="
																	serviceRateUpdate();
																	isRedirect = false;
																"
															>
																Add
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div class="mt-4">
										<div class="card">
											<div class="card-body">
												<div class="col-12 text-right mt-3">
													<a
														class="custom-link mb-3 add_button collapsed"
														aria-expanded="false"
														aria-controls="collapse-1"
													>
														<i class="material-icons" @click="downloadRateSheet()"
															>vertical_align_bottom</i
														>
													</a>
												</div>
												<div class="fix-wrapper mb-5">
													<div class="d-flex mt-3">
														<table class="table table-scroll rate-table">
															<thead>
																<tr>
																	<th>Zone</th>
																	<th>Base Rate</th>
																	<th>From</th>
																	<th>To</th>
																	<th>Increment</th>
																	<th />
																</tr>
															</thead>
															<tbody
																v-for="data in serviceDataList"
																:key="data.id"
																class="body-half-screen"
															>
																<tr v-for="rateRow in data.rates" :key="rateRow.id">
																	<td>
																		{{ rateRow.zone_id ? rateRow.zone_id.name : "" }}
																	</td>
																	<td>
																		{{
																			rateRow.base_rate
																				? "$" + rateRow.base_rate.toFixed(2)
																				: ""
																		}}
																	</td>
																	<td>{{ rateRow.from }}</td>
																	<td>{{ rateRow.to }}</td>
																	<td>
																		{{ rateRow.increment }}
																	</td>
																	<td>
																		<i
																			class="material-icons cursor-pointer"
																			@click="editRate(rateRow)"
																			>edit</i
																		>
																		<i
																			class="material-icons cursor-pointer ml-3"
																			@click="deleteRate(rateRow)"
																			>close</i
																		>
																	</td>
																</tr>
																<tr v-if="data.rates.length === 0">
																	<td colspan="3">
																		<div class="no-data">No Data Available</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<WarningModal
					:content="warningContent"
					@onConfirm="deactivateRating()"
					@onCancel="activateRating()"
				/>
			</form>
		</ValidationObserver> -->
	</div>
</template>

<style scoped lang="scss">
.d-flex {
	flex-flow: row wrap;
}
span.vue__time-picker.time-picker {
	display: block;
}
.card-header {
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.rt-20 {
	right: 20px;
}

.rate-table {
	th {
		white-space: nowrap;
	}
}
</style>
