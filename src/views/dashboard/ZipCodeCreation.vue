<script setup lang="ts">
// @Action('terminal/terminals') terminalAction: any;

// @Getter('terminal/getTerminials') getTerminals: any;

// @Action('zone/zones') zoneAction: any;

// @Getter('zone/getZones') getZones: any;

const terminals: any = [];

const zoneOptions: any = [];

const select: any = "";

//   const zipCode: ZipCode = new ZipCode();

const submitDisabled: boolean = false;

const error: string = "";

// $refs!: {
//   observer: InstanceType<typeof ValidationObserver>;
// };

function mounted() {
	//  this.initializeTerminals();
	//  this.initializeZones();
}

function created() {
	//  const uri = window.location.search.substring(1);
	//  const params = new URLSearchParams(uri);
	//  this.zipCode.id = params.get('id');
	//  if (this.zipCode.id) {
	//    this.getZipCodeById(this.zipCode.id);
	//  }
}

function getZipCodeById(id: any) {
	//  ZipCodeDataService.getZipCodesById(id).then((res) => {
	//    console.log(res, 'oioioi');
	//    if (res && typeof res.data === 'object') {
	//      Object.assign(this.zipCode, this.zipCode.setData(res.data));
	//    }
	//  });
}

async function initializeTerminals() {
	// if (!this.getTerminals || !this.getTerminals.length) {
	//   await this.terminalAction();
	// }
	// this.terminals = utility.mapCustomDropdown(
	//   'text',
	//   'value',
	//   this.getTerminals,
	//   'Select',
	// );
}

async function initializeZones() {
	// if (!this.getZones || !this.getZones.length) {
	//   await this.zoneAction();
	// }
	// this.zoneOptions = utility.mapCustomDropdown(
	//   'text',
	//   'value',
	//   this.getZones,
	//   'Select Zone',
	// );
}

function processForm(handleSubmit: any) {
	//  handleSubmit(this.submit);
}

async function submit() {
	//  this.disableButton().then(() => {
	//    if (this.zipCode.id) {
	//      ZipCodeDataService.editZipCode(this.zipCode).then((res) => {
	//        if (res && res.status === 200) {
	//          ToasterService.success({
	//            message: 'Zip code updated successfully !',
	//          });
	//          this.refreshForm();
	//          this.goBack();
	//        }
	//      });
	//    } else {
	//      ZipCodeDataService.createZipCode(this.zipCode).then((res) => {
	//        if (res && res.status === 201) {
	//          ToasterService.success({
	//            message: 'Zip code created successfully !',
	//          });
	//          this.refreshForm();
	//          this.goBack();
	//        }
	//      });
	//    }
	//  });
}

function disableButton() {
	//  return new Promise((resolve) => {
	//    this.submitDisabled = true;
	//    resolve('resolved');
	//  });
}

function setError(text: string) {
	//  this.error = text;
}

function refreshForm() {
	//  this.zipCode = new ZipCode();
	//  this.submitDisabled = false;
}

function goBack() {
	// this.$router.push({
	//   path: 'zipcode',
	// });
}
</script>

<template>
	<!-- <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
		<div class="row align-items-center">
			<div class="col d-flex align-items-center">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Zipcode Setup</h5>
				</div>
				<div class="float-left">
					<button
						type="button"
						class="btn mr-3 mb-4 btn-yellow"
						@click="goBack()"
					>
						Back
					</button>
					<button
						ref="submitButton"
						type="button"
						class="btn mr-4 mb-4 btn-black"
						@click="clearForm"
					>
						New
					</button>
				</div>
			</div>
		</div>
		<form @submit.prevent="processForm(handleSubmit)">
			<div class="col-12 col-md-12 col-lg-6 my-4">
				<div class="card">
					<div class="card-body">
						<div class="row align-items-center">
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										rules="required"
									>
										<CustomTextInput
											v-model="zipCode.zip"
											name="zipcode"
											label="ZipCode"
											placeholder=""
											type="text"
											:errors="errors"
											autocomplete="zipcode"
											:field-input.sync="zipCode.zip"
										/>
									</ValidationProvider>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										rules="required"
									>
										<CustomTextInput
											v-model="zipCode.route"
											name="route"
											label="Route"
											placeholder=""
											type="text"
											:errors="errors"
											autocomplete="route"
											:field-input.sync="zipCode.route"
										/>
									</ValidationProvider>
								</div>
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<label for="">Terminal</label>
									<b-form-select
										v-model="zipCode.terminal_id"
										class="w-100 form-control"
										:options="terminals"
									/>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<label for="">Zone</label>
									<b-form-select
										v-model="zipCode.zone_id"
										class="w-100 form-control"
										:options="zoneOptions"
									/>
								</div>
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										rules="required"
									>
										<CustomTextInput
											v-model="zipCode.area"
											name="area"
											label="Area"
											placeholder=""
											type="text"
											:errors="errors"
											autocomplete="area"
											:field-input.sync="zipCode.area"
										/>
									</ValidationProvider>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="float-right mt-2">
									<button type="submit" class="btn btn-black">
										{{ zipCode.id ? "Update" : "Save" }}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</ValidationObserver> -->
</template>

<style scoped lang="scss"></style>
