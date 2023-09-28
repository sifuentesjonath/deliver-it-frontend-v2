<script setup lang="ts">
const currentId: any = null;

const selected = "";

const optionList = [
	{ value: "", text: "Select" },
	{ value: "ENABLED", text: "Enabled" },
	{ value: "DISABLED", text: "Disabled" },
];

const bodyText: any = "Warning!! This change is not reversable.";

function mounted() {
	// console.log(this.currentId, 'IDD');
}

function processForm(handleSubmit: any) {
	// handleSubmit(this.submit);
}

function submit() {
	// if (this.selected === 'DISABLED') {
	//   // this.$root.$emit('bv::show::modal', 'bv-modal-warning');
	// } else {
	//   console.log(this.selected, 'PO');
	// }
}
</script>

<template>
	<!-- <ValidationObserver v-slot="{ handleSubmit }">
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
										rules=""
									>
										<CustomTextInput
											name="terminal"
											label="Terminal"
											placeholder="Terminal"
											type="text"
											:errors="errors"
											autocomplete="terminal"
										/>
									</ValidationProvider>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										rules=""
									>
										<CustomTextInput
											name="description"
											label="Description"
											placeholder="Description"
											type="text"
											:errors="errors"
											autocomplete="description"
										/>
									</ValidationProvider>
								</div>
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<b-form-select
										v-model="selected"
										class="w-100 form-control"
										:options="optionList"
									/>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="float-right mt-2">
									<button type="submit" class="btn btn-black">OK</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<WarningModal :content="bodyText" />
	</ValidationObserver> -->
</template>

<style scoped lang="scss">
.bold {
	font-weight: bold;
}
.pagination-box {
	display: block;
	float: right;
}
</style>
