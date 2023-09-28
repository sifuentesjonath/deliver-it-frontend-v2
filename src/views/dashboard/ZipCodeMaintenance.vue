<script setup lang="ts">
// @Action('terminal/terminals') terminalAction: any;

// @Getter('terminal/getTerminials') getTerminals: any;

// @Action('zone/zones') zoneAction: any;

// @Getter('zone/getZones') getZones: any;

const terminals: any = [];

const zoneOptions: any = [];

const zipCodesArray: any = [];

const createFlag: boolean = false;

const selectedData: any = null;

const bodyText: string = "";

const showFlag: boolean = false;

const file: any = null;

function mounted() {
	//  this.initializeTerminals();
	//  this.initializeZones();
	//  this.getZipCodes();
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

function create() {
	// this.$router.push({ name: 'zipcodeCreation' });
}

function filterData(filterObj?: any) {
	//  let queryParams = '';
	//  const obj: any = {};
	//  if (filterObj?.terminal) {
	//    obj.terminal_id = filterObj.terminal;
	//  }
	//  if (filterObj?.zone) {
	//    obj.zone_id = filterObj.zone;
	//  }
	//  queryParams = `${queryParams}&${utility.serializeQueryParameters(obj)}`;
	//  return queryParams;
}

function getZipCodes(params?: any) {
	//  const queryParams = this.filterData(params) === '&' ? null : this.filterData(params);
	//  ZipCodeDataService.getZipCodes(queryParams).then((resp) => {
	//    if (resp && resp.data) {
	//      this.zipCodesArray = resp.data;
	//    }
	//  });
}

function editZipCode(item: any) {
	// this.$router.push({
	//   path: 'zipcodeCreation',
	//   query: { id: item.id },
	// });
}

function confirmDelete() {
	//  ZipCodeDataService.deleteZipcode(this.selectedData.id).then((resp) => {
	//    if (resp.status === 200 && resp.data.message === 'Success') {
	//      this.zipCodesArray.forEach((item: any, index: any) => {
	//        if (item.id === this.selectedData.id) {
	//          this.zipCodesArray.splice(index, 1);
	//          ToasterService.success({ message: 'Zipcode deleted successfully' });
	//        }
	//      });
	//    }
	//  });
}

function openWarning(data: any) {
	//  this.selectedData = data;
	//  this.bodyText = 'WARNING !! ARE YOU SURE YOU WANT TO REMOVE THIS ZIPCODE ? THIS CANNOT BE UNDONE!';
	// //this.$bvModal.show('bv-modal-warning');
}

function openUploadModal() {
	//  this.showFlag = true;
}

function closeModal() {
	//  this.showFlag = false;
	//  this.file = null;
}

function onFileChange(data: any) {
	//  this.file = data;
}

function handleFileUpload() {
	//  console.log(this.file, 'FILE');
	//  const formData = new FormData();
	//  if (!this.file) return;
	//  formData.append('file', this.file, this.file.name);
	//  this.saveUpload(formData);
}

function saveUpload(data: any) {
	//  ZipCodeDataService.uploadZipcode(data).then((resp) => {
	//    if (resp && resp.message === 'Success') {
	//      this.getZipCodes();
	//      ToasterService.success({ message: 'Zip File uploaded successfully' });
	//      this.closeModal();
	//    }
	//  });
}

function deleteFile() {
	//  this.file = null;
}

function downloadZipCode() {
	//  ZipCodeDataService.downloadZipcode().then((resp) => {
	//    if (resp && resp.status === 200) {
	//      const ext = '.xlsx';
	//      utility.convertBufferDataToFile(resp.data, ext);
	//    }
	//  });
}
</script>

<template>
	<div class="">
		<div class="row align-items-center col-12 col-lg-12">
			<div class="col d-flex align-items-center">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Zipcode Maintenance</h5>
				</div>
			</div>
		</div>
		<div class="col-12 col-lg-12">
			<div class="row">
				<div class="col-md-8 col-12 mb-md-0">
					<!-- <FilterComponent
						:zone-options="zoneOptions"
						:terminal-options="terminals"
						@onValueChange="getZipCodes"
					/> -->
				</div>
				<div class="col-md-4 col-12 mb-md-0">
					<div class="float-right">
						<div>
							<button
								type="button"
								class="btn mr-3 mb-4 btn-black"
								@click="create()"
							>
								Create
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row align-items-center col-12 col-lg-12">
			<div class="col-md-6 col-12 mb-md-0">
				<div class="float-left">
					<h5 class="bold">Route Configuration</h5>
				</div>
			</div>
			<div class="col-md-6 col-12 mb-md-0">
				<div class="float-right">
					<a href="#" class="mr-4" @click="openUploadModal">Upload</a>
					<a href="#" @click="downloadZipCode">Download</a>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-12 col-lg-12">
				<div class="card">
					<div class="card-body">
						<table class="table table-hover">
							<thead class="grey lighten-2">
								<tr>
									<th>Zipcode</th>
									<th>Route</th>
									<th>Terminal</th>
									<th>Zone</th>
									<th>Area</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in zipCodesArray" :key="item.id">
									<td>{{ item.zip }}</td>
									<td>{{ item.route }}</td>
									<td>{{ item.terminal_id ? item.terminal_id.name : "" }}</td>
									<td>{{ item.zone ? item.zone.name : "" }}</td>
									<td>{{ item.area }}</td>
									<td>
										<i
											class="material-icons cursor-pointer"
											@click="editZipCode(item)"
											>edit</i
										>
										<i
											class="material-icons cursor-pointer ml-5"
											@click="openWarning(item)"
											>close</i
										>
									</td>
								</tr>
								<!-- <tr v-if="zipCodesArray.length === 0">
									<td colspan="5">
										<div class="no-data">No Data Available</div>
									</td>
								</tr> -->
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="pagination-box mt-5">
      <div class="row align-items-center">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active">
            <a
              class="page-link"
              href="#"
            >1</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >2</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >3</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >4</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >5</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >6</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >
              <span aria-hidden="true">»</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div> -->
		<!-- <div>
			<WarningModal :content="bodyText" @onConfirm="confirmDelete" />
		</div> -->
		<!-- <div>
			<UploadModal
				:file="file"
				:show-flag="showFlag"
				@closeModal="closeModal"
				@handleFileUpload="handleFileUpload"
				@deleteFile="deleteFile"
				@onFileChange="onFileChange"
			/>
		</div> -->
	</div>
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
