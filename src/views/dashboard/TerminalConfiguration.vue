<script setup lang="ts">
//   const terminalData: Terminal = new Terminal();

const error: string = "";

const zones: any = [];

const submitDisabled: boolean = false;

function created() {
	//  const uri = window.location.search.substring(1);
	//  const params = new URLSearchParams(uri);
	//  this.terminalData.id = params.get('id');
	//  if (this.terminalData.id) {
	//    this.getTerminalById(this.terminalData.id);
	//  }
}

function mounted() {
	//  this.getZones();
}

function getZones() {
	//  ZoneDataService.getZones().then((res) => {
	//    if (res && Array.isArray(res.data)) {
	//      this.zones = utility.mapCustomDropdown(
	//        'text',
	//        'value',
	//        res.data,
	//        'Select',
	//      );
	//    }
	//  });
}

function getTerminalById(id: any) {
	//  TerminalDataService.getTerminalById(id).then((res) => {
	//    console.log('getZonesById', res);
	//    if (res && typeof res.data === 'object') {
	//      this.terminalData.description = res.data.description;
	//      this.terminalData.name = res.data.name;
	//      this.terminalData.id = res.data.id;
	//      this.terminalData.zone_id = res.data.zone.id;
	//    }
	//  });
}

function onSubmit() {
	//  this.submitDisabled = true;
	//  if (this.terminalData.id) {
	//    TerminalDataService.editTerminal(this.terminalData).then((res) => {
	//      if (res && res.status === 200) {
	//        this.refreshForm();
	//        ToasterService.success({
	//          message: 'Terminal updated successfully',
	//        });
	//      }
	//    });
	//  } else {
	//    TerminalDataService.createTerminal(this.terminalData).then((res) => {
	//      if (res && res.status === 201) {
	//        this.refreshForm();
	//        ToasterService.success({
	//          message: 'Terminal created successfully',
	//        });
	//      }
	//    });
	//  }
}

function refreshForm() {
	//  this.terminalData = new Terminal();
	//  this.submitDisabled = false;
	// this.$router.push({ name: 'terminals' });
}

function setError(text: string) {
	//  this.error = text;
}
</script>

<template>
	<div class="container-fluid">
		<!-- <ValidationObserver v-slot="{ handleSubmit }">
			<form @submit.prevent="handleSubmit(onSubmit)">
				<div class="row align-items-center">
					<div class="col d-flex align-items-center">
						<div class="float-left mr-2">
							<h5 class="px-2 mb-3 cs-main-heading">Terminal Configuration</h5>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-sm-6 col-md-6 col-lg-4">
						<div class="card">
							<div class="card-body">
								<div class="form-group">
									<CustomTextInputValidation
										v-model="terminalData.name"
										name="terminal_name"
										label="Terminal"
										autocomplete="type"
										:field-input.sync="terminalData.name"
										rules="required"
									/>
								</div>
								<div class="form-group">
									<CustomTextInputValidation
										v-model="terminalData.description"
										name="terminal_description"
										label="Description"
										autocomplete="type"
										:field-input.sync="terminalData.description"
										rules="required"
									/>
								</div>
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										name="zone"
										rules="required"
									>
										<label for="zone" class="control-label">Zone</label>
										<b-form-select
											v-model="terminalData.zone_id"
											class="w-100"
											:options="zones"
										/>
										<div v-if="errors.length > 0" class="error-holder flex-row">
											<span class="error-text">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="form-group">
									<div class="float-left">
											type="submit"
											:disabled="submitDisabled"
											class="btn mr-4 mb-4 btn-black"
										>
											{{ terminalData.id ? "Update" : "Save" }}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</ValidationObserver> -->
	</div>
</template>

<style scoped lang="scss"></style>
