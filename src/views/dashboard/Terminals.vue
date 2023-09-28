<script setup lang="ts">
const terminals: [] = [];

// @Action('terminal/terminals') terminalAction: any;

// @Getter('terminal/getTerminials') getTerminials: any;

function mounted() {
	//  this.getTerminals();
}

function getTerminals() {
	// this.terminalAction().then(() => {
	//   this.terminals = this.getTerminials;
	// });
}

function editZone(eachTerminal: any) {
	// this.$router.push({ path: 'terminals/configuration', query: { id: eachTerminal.id } });
}
</script>

<template>
	<div class="container-fluid">
		<div class="row align-items-center">
			<div class="col d-flex align-items-center">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Terminals</h5>
				</div>
				<div class="float-left">
					<router-link to="terminals/configuration">
						<button type="button" class="btn mr-3 mb-4 btn-yellow">New</button>
					</router-link>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-12 col-lg-12">
				<div class="card">
					<!-- <div v-if="terminals.length > 0" class="card-body">
						<table class="table table-hover">
							<thead class="grey lighten-2">
								<tr>
									<th>Terminals</th>
									<th>Description</th>
									<th>Zone</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr v-for="eachTerminal in terminals" :key="eachTerminal.id">
									<td>{{ eachTerminal.name }}</td>
									<td>{{ eachTerminal.description }}</td>
									<td>{{ eachTerminal.zone.name }}</td>
									<td>
										<i
											class="material-icons cursor-pointer"
											@click="editZone(eachTerminal)"
										>
											edit</i
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
