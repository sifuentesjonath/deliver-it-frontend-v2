<script setup lang="ts">
// import { ValidationObserver, ValidationProvider } from 'vee-validate';
// import CustomTextInput from '@/components/inputs/CustomTextInput.vue';
// import ZoneDataService from '../services/api/ZoneDataService';
const zones: [] = [];

function mounted() {
	// this.getZones();
}

function getZones() {
	// ZoneDataService.getZones().then((res) => {
	// 	if (res && Array.isArray(res.data)) {
	// 		this.zones = res.data;
	// 	}
	// });
}

function editZone(eachZone: any) {
	// this.$router.push({ path: 'zoneSetup/configuration', query: { id: eachZone.id } });
}
</script>

<template>
	<div class="container-fluid">
		<div class="row align-items-center">
			<div class="col d-flex align-items-center">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Zone Setup</h5>
				</div>
				<div class="float-left">
					<router-link to="zoneSetup/configuration">
						<button type="button" class="btn mr-3 mb-4 btn-yellow">New</button>
					</router-link>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-12 col-lg-12">
				<div class="card">
					<div v-if="zones.length > 0" class="card-body">
						<table class="table table-hover">
							<thead class="grey lighten-2">
								<tr>
									<th>Zone</th>
									<th>Description</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr v-for="eachZones in zones" :key="eachZones.id">
									<td>{{ eachZones.name }}</td>
									<td>{{ eachZones.description }}</td>
									<td>
										<i
											class="material-icons cursor-pointer"
											@click="editZone(eachZones)"
											>edit</i
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
