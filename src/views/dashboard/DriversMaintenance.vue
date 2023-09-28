<script setup lang="ts">
// const driverGeneralObj: DriverGeneral = new DriverGeneral();

// const driverObj: Personal = new Personal();

// const fileObj: Document = new Document();

// const logoObj: Document = new Document();

// const insuranceFileObj: Document = new Document();

// const compensationObj: Compensation = new Compensation();

// const insuranceObj: Insurance = new Insurance();

const submitDisabled: boolean = false;

const feeCompensationList: any = [];

const serviceCompensationList: any = [];

const driverId: any = null;

const docList: any = [];

const logoUrl: any = null;

function mounted() {}

function submit(value: any) {
	//   let request: any;
	//   if (value.page === 'general') {
	//     request = this.driverGeneralObj.setToRequest(this.driverObj);
	//   } else if (value.page === 'personal') {
	//     console.log(this.driverObj);
	//     request = this.driverObj.mapToRequest();
	//   } else if (value.page === 'compensation') {
	//     request = this.compensationObj.mapToRequest();
	//     delete request.fee_compensation;
	//     delete request.service_compensation;
	//   } else if (value.page === 'insurance') {
	//     request = this.insuranceObj.mapToRequest();
	//   }
	// console.log(request, this.fileObj, "REQUEST");
	//   this.disableButton().then(() => {
	//     if (request.id) {
	//       DriverGeneralDataService.editDriver(request).then((res) => {
	//         if (res && res.data) {
	//           this.setData(res.data);
	//           this.submitDisabled = false;
	//           Toaster.success({ message: 'Driver updated successfully' });
	//           this.fileUpload();
	//           this.logoUpload();
	//         }
	//       });
	//     } else {
	//       request = utility.excludeEmptykey(request);
	//       DriverGeneralDataService.createDriverGeneral(request).then((res) => {
	//         if (res && res.data) {
	//           this.setData(res.data);
	//           this.submitDisabled = false;
	//           Toaster.success({ message: 'Driver Created successfully' });
	//           this.fileUpload();
	//           this.logoUpload();
	//         }
	//       });
	//     }
	//   });
}

function fileUpload() {
	//   const formData = new FormData();
	//   if (!this.fileObj.file) return;
	//   if (!this.driverObj.id) return;
	//   formData.append('file', this.fileObj.file);
	//   formData.append('model_id', this.driverObj.id);
	//   formData.append('model', this.fileObj.model);
	//   formData.append('description', this.fileObj.description);
	//   FileDataService.createFile(formData).then((res) => {
	//     this.fileObj = new Document();
	//     if (res && res.data) {
	//       this.docList.push(res.data.data);
	//       Toaster.success({ message: 'Document uploaded successfully' });
	//     }
	//   });
}

function setData(data: any) {
	//   this.driverGeneralObj = Object.assign(new DriverGeneral(), data);
	//   this.driverObj = Object.assign(new Personal(), data);
	//   this.compensationObj = Object.assign(new Compensation(), data);
	//   this.insuranceObj = Object.assign(new Insurance(), data);
	//   this.driverObj = utility.mapDataToString(this.driverObj);
	//   this.driverId = data.id;
	//   Object.keys(this.driverGeneralObj).forEach((key) => {
	//     if (key === 'documents') {
	//       this.docList = this.driverGeneralObj.documents;
	//     }
	//   });
	//   this.logoUrl = this.docList.find((x) => x.description === 'driver_logo');
	// console.log(this.logoUrl, 'lklkl');
}

function disableButton() {
	//   return new Promise((resolve) => {
	//     this.submitDisabled = true;
	//     resolve('resolved');
	//   });
}

function driverSelected(value: any) {
	//   this.setData(value);
}

function deleteDocument(value: any) {
	//   FileDataService.deleteFile(value.id).then((res) => {
	//     if (res && res.status === 200) {
	//       this.docList.splice(
	//         this.docList.findIndex((item: any) => value.id === item.id),
	//         1,
	//       );
	//       Toaster.success({ message: 'Document deleted successfully' });
	//     }
	//   });
}

function logoUpload() {
	//   const formData = new FormData();
	//   if (!this.logoObj.file) return;
	//   if (!this.driverObj.id) return;
	//   formData.append('file', this.logoObj.file);
	//   formData.append('model_id', this.driverObj.id);
	//   formData.append('model', this.logoObj.model);
	//   formData.append('description', this.logoObj.description);
	//   FileDataService.createFile(formData).then((res) => {
	//     this.logoObj = new Document();
	//     console.log(res, 'RESPONSE');
	//     if (res && res.data) {
	//       Toaster.success({ message: 'Logo uploaded successfully' });
	//     }
	//   });
}

function handleReset() {
	//   this.driverGeneralObj = new DriverGeneral();
	//   this.driverObj = new Personal();
	//   this.compensationObj = new Compensation();
	//   this.fileObj = new Document();
	//   this.logoObj = new Document();
	//   this.docList = [];
	// this.$refs.personal.resetValidation();
}
</script>

<template>
	<div class>
		<div class="row align-items-center">
			<div class="col-12 d-flex align-items-center wrap-all">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Driver Maintenance</h5>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<ul
					class="nav nav-tabs nav-material nav-material-success"
					role="tablist"
				>
					<li class="nav-item">
						<a
							id="spaceships-tab-color"
							class="nav-link active"
							data-toggle="tab"
							href="#1"
							role="tab"
							aria-controls="spaceships-color"
							aria-selected="true"
							>General</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#2"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							>Personal</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#3"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							>Compensation</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#4"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							>Vehicle</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#5"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							>Insurance</a
						>
					</li>
				</ul>
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<!-- <div class="tab-content">
									<div
										id="1"
										class="tab-pane fade active show"
										role="tabpanel"
										aria-labelledby="spaceships-tab-color"
									>
										<DriverGeneralComponent
											:driver-obj="driverObj"
											:file-obj="fileObj"
											:doc-list="docList"
											:logo-obj="logoObj"
											@handleSubmit="submit"
											@handleReset="handleReset"
											@handleDriver="driverSelected"
											@deleteDocument="deleteDocument"
										/>
									</div>

									<div
										id="2"
										class="tab-pane fade"
										role="tabpanel"
										aria-labelledby="pilots-tab-color"
									>
										<div class="py-3 px-4">
											<PersonalComponent
												ref="personal"
												:driver-obj="driverObj"
												@handleSubmit="submit"
												@handleReset="handleReset"
											/>
										</div>
									</div>
									<div
										id="3"
										class="tab-pane fade"
										role="tabpanel"
										aria-labelledby="pilots-tab-color"
									>
										<div
											v-if="driverGeneralObj && driverGeneralObj.id"
											class="py-3 px-4"
										>
											<CompensationComponent
												:driver-id="driverId"
												:compensation-obj="compensationObj"
												@handleSubmit="submit"
												@handleReset="handleReset"
											/>
										</div>
										<div v-if="!driverGeneralObj.id">
											<span class="no-data">Please Select a Driver!!</span>
										</div>
									</div>
									<div
										id="4"
										class="tab-pane fade"
										role="tabpanel"
										aria-labelledby="pilots-tab-color"
									>
										<div
											v-if="driverGeneralObj && driverGeneralObj.id"
											class="py-3 px-4"
										>
											<VehicleComponent :driver-obj="driverObj" />
										</div>
										<div v-if="!driverGeneralObj.id">
											<span class="no-data">Please Select a Driver!!</span>
										</div>
									</div>
									<div
										id="5"
										class="tab-pane fade"
										role="tabpanel"
										aria-labelledby="pilots-tab-color"
									>
										<div
											v-if="driverGeneralObj && driverGeneralObj.id"
											class="py-3 px-4"
										>
											<InsuranceComponent
												:doc-list="docList"
												:driver-obj="driverObj"
												:file-obj="fileObj"
												:insurance-obj="insuranceObj"
												@handleSubmit="submit"
												@deleteDocument="deleteDocument"
											/>
										</div>
										<div v-if="!driverGeneralObj.id">
											<span class="no-data">Please Select a Driver!!</span>
										</div>
									</div>
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
