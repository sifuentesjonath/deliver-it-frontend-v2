<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { RouterLink } from "vue-router";
import WarningModal from "@/components/modal/WarningModal.vue";
// import ServiceSetupService from "../services/api/ServiceSetupDataService";
// import ToasterService from "../services/api/ToasterService";

const serviceData: Ref<any[]> = ref([]);

const bodyText = ref("");

const selectedData = ref(null);

const modal2 = ref(false);

// @Action('assignment/Services') ServicesAction: any;

onMounted(() => {
	getServices();
});

async function getServices() {
	// const serviceList = await this.ServicesAction();
	// if (serviceList && Array.isArray(serviceList.data)) {
	//   this.serviceData = serviceList.data;
	//   console.log('this.serviceData', this.serviceData);
	// }
}

function editService(eachService: any) {
	// this.$router.push({
	//   path: 'serviceSetup/configuration',
	//   query: { id: eachService.id },
	// });
}

function openWarning(data: any) {
	selectedData.value = data;
	bodyText.value = "ARE YOU SURE YOU WANT TO DELETE THIS SERVICE ?";
	// //this.$bvModal.show('bv-modal-warning-serviceRates');
}

function onConfirm() {
	if (modal2.value) {
		deleteService(selectedData.value);
		modal2.value = false;
	} else {
		modal2.value = true;
		bodyText.value = `Warning !!! You about to permanently delete this Service.
                  Are you sure you want to Continue ?`;
		// //this.$bvModal.show('bv-modal-warning-serviceRates');
	}
}

// ToDo: Uncomment content when the service becomes defined
function deleteService(data: any) {
	// ServiceSetupService.deleteService(data.id).then((resp) => {
	// 	if (resp && resp.message === "Success") {
	// 		serviceData.forEach((item: any, index) => {
	// 			if (item.id === data.id) {
	// 				serviceData.splice(index, 1);
	// 				ToasterService.success({ message: "Service deleted successfully" });
	// 			}
	// 		});
	// 	}
	// });
}
</script>

<template>
	<div class="container-fluid">
		<div class="row align-items-center">
			<div class="col d-flex align-items-center">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Service Setup</h5>
				</div>
				<div class="float-left">
					<RouterLink to="serviceSetup/configuration">
						<button type="button" class="btn mr-3 mb-4 btn-yellow">New</button>
					</RouterLink>
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
									<th>Name</th>
									<th>Code</th>
									<th>Description</th>
									<th>Segment</th>
									<th>Terminal</th>
									<th>Status</th>
									<th />
								</tr>
							</thead>
							<tbody v-for="eachService in serviceData" :key="eachService.id">
								<tr v-if="!eachService.customer_id">
									<td>{{ eachService.name }}</td>
									<td>{{ eachService.code }}</td>
									<td>{{ eachService.description }}</td>
									<td>
										{{
											eachService.company_id ? eachService.company_id.name : ""
										}}
									</td>
									<td>
										{{
											eachService.terminal_id
												? eachService.terminal_id.name
												: ""
										}}
									</td>
									<td>{{ eachService.active === 1 ? "Active" : "Inative" }}</td>
									<td>
										<i
											class="material-icons cursor-pointer"
											@click="editService(eachService)"
											>edit</i
										>
										<i
											class="material-icons cursor-pointer ml-5"
											@click="openWarning(eachService)"
											>close</i
										>
										<!-- @click="deleteService(eachService)" -->
									</td>
								</tr>
							</tbody>
						</table>
						<!-- <div class="pagination-box">
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
            </div> -->
					</div>
				</div>
			</div>
		</div>
		<!-- <div>
      <WarningModal
        :content="bodyText"
        @onConfirm="confirmDelete"
        :modal2="modal2"
      />
    </div> -->
		<div>
			<b-modal id="bv-modal-warning-serviceRates" title="WARNING" hide-footer>
				<div class="row mt-4">
					<div class="col-12 col-sm-12 col-md-12 col-lg-12">
						<div class>
							<div class="card-body">
								<div class="form-group">
									<label for="" class="control-label">{{ bodyText }}</label>
								</div>
								<div class="form-group">
									<div class="float-right">
										<button
											type="button"
											class="btn mr-4 mb-4 btn-yellow"
											@click="
												// ToDo: Find out what is this
												// $bvModal.hide('bv-modal-warning-serviceRates');
												onConfirm()
											"
										>
											{{ modal2 ? "YES" : "Ok" }}
										</button>
										<button
											type="button"
											class="btn mr-4 mb-4 btn-black"
											@click="
												// ToDo: Find out what is this
												// $bvModal.hide('bv-modal-warning-serviceRates');
												modal2 = false
											"
										>
											Cancel
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</b-modal>
		</div>
	</div>
</template>

<style scoped lang="scss">
.pagination-box {
	display: block;
	float: right;
}
</style>
