<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
	console.log("Zoneconfiguration");
});
// import { Component, Vue } from 'vue-property-decorator';
// // import { ValidationObserver, ValidationProvider } from 'vee-validate';
// import CustomTextInputValidation from '@/components/inputs/CustomTextInputValidation.vue';
// import { Action } from 'vuex-class';
// import { Zone } from '../models/Zone';
// import ZoneDataService from '../services/api/ZoneDataService';
// import Toaster from '../services/api/ToasterService';

// @Action('zone/zones') zoneAction: any;

// const zoneData = new Zone();

const error: string = "";

const submitDisabled: boolean = false;

function created() {
	// const uri = window.location.search.substring(1);
	// const params = new URLSearchParams(uri);
	// this.zoneData.id = params.get("id");
	// if (this.zoneData.id) {
	// 	this.getZoneById(this.zoneData.id);
	// }
}

function getZoneById(id: any) {
	// ZoneDataService.getZonesById(id).then((res) => {
	// 	console.log("getZonesById", res);
	// 	if (res && typeof res.data === "object") {
	// 		Object.assign(this.zoneData, res.data);
	// 	}
	// });
}

function onSubmit() {
	// this.submitDisabled = true;
	// if (this.zoneData.id) {
	// 	ZoneDataService.editZones(this.zoneData).then(() => {
	// 		this.refreshForm();
	// 		Toaster.success({ message: "Zone updated successfully" });
	// 	});
	// } else {
	// 	ZoneDataService.createZone(this.zoneData).then(() => {
	// 		this.refreshForm();
	// 		Toaster.success({ message: "Zone added successfully" });
	// 	});
	// }
}

function refreshForm() {
	// this.zoneData = new Zone();
	// this.submitDisabled = false;
	// this.zoneAction();
	// this.$router.push({ name: 'zoneSetup' });
}

function setError(text: string) {
	// this.error = text;
}
</script>

<template>
	<!-- <div class="container-fluid">
		<ValidationObserver v-slot="{ handleSubmit }">
			<form @submit.prevent="handleSubmit(onSubmit)">
				<div class="row align-items-center">
					<div class="col d-flex align-items-center">
						<div class="float-left mr-2">
							<h5 class="px-2 mb-3 cs-main-heading">Zone Configuration</h5>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-sm-6 col-md-6 col-lg-4">
						<div class="card">
							<div class="card-body">
								<div class="form-group">
									<CustomTextInputValidation
										v-model="zoneData.name"
										name="zone_name"
										label="Zone Name"
										autocomplete="type"
										:field-input.sync="zoneData.name"
										rules="required"
									/>
								</div>
								<div class="form-group">
									<CustomTextInputValidation
										v-model="zoneData.description"
										name="zone_description"
										label="Description"
										autocomplete="type"
										:field-input.sync="zoneData.description"
										rules="required"
									/>
								</div>
								<div class="form-group">
									<div class="float-left">
										<button
											type="submit"
											:disabled="submitDisabled"
											class="btn mr-4 mb-4 btn-black"
										>
											{{ zoneData.id ? "Update" : "Save" }}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</ValidationObserver>
	</div> -->
</template>

<style scoped lang="scss"></style>
