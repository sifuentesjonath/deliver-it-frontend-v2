<script setup lang="ts">
// const feeData: Fee = new Fee();

const error: string = "";

//   const feeTypes: any = defaultFeeTypes;

const submitDisabled: boolean = false;

let companyTypeOptions: any = null;

const miscFees: [] = [];

// $refs!: {
//   observer: InstanceType<typeof ValidationObserver>;
// };

// @Getter('company/getCompanies') getCompaniesData: any;

// @Action('assignment/MiscFees') MiscFeeAction: any;

function created() {
	//  const uri = window.location.search.substring(1);
	//  const params = new URLSearchParams(uri);
	//  this.feeData.id = params.get('id');
	//  if (this.feeData.id) this.getFeeById(this.feeData.id);
}

function mounted() {
	// this.getFees();
	// this.companyTypeOptions = this.getCompaniesData.map((item: any) => ({
	//   value: item.id,
	//   text: item.name,
	// }));
}

function getFeeById(id: any) {
	//  FeeDataService.getMiscFeeById(id).then((res) => {
	//    if (res && typeof res.data === 'object') {
	//      this.feeData = Object.assign(new Fee(), res.data);
	//      this.feeData.fee_type_id = res.data.type.id;
	//    }
	//  });
}

async function getFees() {
	// try {
	//   const feesData = await this.MiscFeeAction();
	//   if (feesData.data && Array.isArray(feesData.data)) {
	//     this.miscFees = feesData.data;
	//   }
	// } catch (error) {
	//   console.log('error', error);
	// }
}

function onSubmit() {
	//  this.submitDisabled = true;
	//  this.feeData.auto_charge = this.feeData.auto_charge === 'true' ? '1' : '0';
	//  if (this.feeData.id) {
	//    FeeDataService.editFee(this.feeData).then((res) => {
	//      if (res && res.status === 200) {
	//        this.refreshForm();
	//        ToasterService.success({ message: 'Fee updated successfully !' });
	//      }
	//    });
	//  } else {
	//    FeeDataService.createFee(this.feeData).then((res) => {
	//      if (res && res.status === 201) {
	//        this.refreshForm();
	//        ToasterService.success({ message: 'Fee created successfully !' });
	//      }
	//    });
	//  }
}

function editMiscFee(eachFees: any) {
	//  Object.assign(this.feeData, this.feeData.setFeeData(eachFees));
}

function setError(text: string) {
	//  this.error = text;
}

function refreshForm() {
	//  this.feeData = new Fee();
	//  this.submitDisabled = false;
	// this.$refs.observer.reset();
	//  this.getFees();
}

function deleteMiscFee(data: any) {
	//  FeeDataService.createFee(data).then((res) => {
	//    if (res && res.message === 'Success') {
	//      this.miscFees.forEach((item: any, index) => {
	//        if (item.id === data.id) {
	//          this.miscFees.splice(index, 1);
	//          ToasterService.success({ message: 'Deleted successfully' });
	//        }
	//      });
	//    }
	//  });
}
</script>

<template>
	<!-- <div class="container-fluid">
		<ValidationObserver ref="observer" v-slot="{ handleSubmit }">
			<form form="feeForm" @submit.prevent="handleSubmit(onSubmit)">
				<div class="row align-items-center">
					<div class="col d-flex align-items-center">
						<div class="float-left mr-2">
							<h5 class="px-2 mb-3 cs-main-heading">Misc Fee Setup</h5>
						</div>
						<div class="float-left">
							<button
								type="button"
								class="btn mr-3 mb-4 btn-yellow"
								@click="refreshForm"
							>
								New
							</button>
							<button
								type="submit"
								class="btn mr-4 mb-4 btn-black"
								:disabled="submitDisabled"
							>
								{{ feeData.id ? "Update" : "Save" }}
							</button>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-sm-6 col-md-6 col-lg-6">
						<div class="card">
							<div class="card-body">
								<div class="form-group">
									<CustomTextInputValidation
										v-model="feeData.name"
										name="Fee"
										label="Fee"
										autocomplete="type"
										:field-input.sync="feeData.name"
										rules="required"
									/>
								</div>
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										name="Type"
										rules="required"
									>
										<label for="zone">Type</label>
										<b-form-select
											v-model="feeData.fee_type_id"
											class="w-100 form-control"
											:options="feeTypes"
										/>
										<div v-if="errors.length > 0" class="error-holder flex-row">
											<span class="error-text">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="form-group">
									<CustomTextInputValidation
										v-model="feeData.amount"
										name="Amount"
										label="Amount"
										autocomplete="type"
										:field-input.sync="feeData.amount"
										rules="required|numeric"
									/>
								</div>
								<div class="form-group">
									<CustomTextInputValidation
										v-model="feeData.code"
										name="Code"
										label="Code"
										autocomplete="type"
										:field-input.sync="feeData.code"
										rules="required|minmax:1,2"
									/>
								</div>
								<div class="form-group">
									<label for="days" class="control-label"
										>Automatically Charged</label
									>
									<div class="checkbox_group">
										<div class="checkbox_item">
											<label
												class="custom-control custom-radio custom-radio--input"
											>
												<input
													id="searchType"
													v-model="feeData.auto_charge"
													class="custom-control-input"
													value="true"
													name="searchType"
													type="radio"
												/>
												<span class="custom-control-indicator">
													<span />
												</span>
												<span class="custom-control-description">Yes</span>
											</label>
										</div>
										<div class="checkbox_item">
											<label
												class="custom-control custom-radio custom-radio--input"
											>
												<input
													id="searchType"
													v-model="feeData.auto_charge"
													class="custom-control-input"
													value="false"
													name="searchType"
													type="radio"
												/>
												<span class="custom-control-indicator">
													<span />
												</span>
												<span class="custom-control-description">No</span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-lg-12">
						<div class="card">
							<div v-if="miscFees.length > 0" class="card-body">
								<table class="table table-hover">
									<thead class="grey lighten-2">
										<tr>
											<th>Fee Name</th>
											<th>Type</th>
											<th>Amount</th>
											<th />
										</tr>
									</thead>
									<tbody>
										<tr v-for="eachFees in miscFees" :key="eachFees.id">
											<td>{{ eachFees.name }}</td>
											<td>{{ eachFees.type.name }}</td>
											<td>{{ eachFees.amount }}</td>
											<td>
												<i
													class="material-icons cursor-pointer"
													@click="editMiscFee(eachFees)"
													>edit</i
												>
												<i
													class="material-icons cursor-pointer ml-5"
													@click="deleteMiscFee(eachFees)"
													>close</i
												>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</form>
		</ValidationObserver>
	</div>  -->
</template>

<style scoped lang="scss"></style>
