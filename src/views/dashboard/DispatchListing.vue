<script setup lang="ts">
const currentId: any = null;

const dataArray: any = [
	{
		id: 1,
		terminal: "Arrow SD",
		decription: "Arrow Delivery",
	},
	{
		id: 2,
		terminal: "Inglewood",
		decription: "Inglewood",
	},
	{
		id: 3,
		terminal: "East LA",
		decription: "East Los Angeles",
	},
	{
		id: 4,
		terminal: "Valley",
		decription: "Valley LA",
	},
	{
		id: 5,
		terminal: "Nocal-Misc",
		decription: "Northern CA",
	},
	{
		id: 6,
		terminal: "Route LA",
		decription: "Los Angeles Route",
	},
	{
		id: 7,
		terminal: "Tustin",
		decription: "Tustin Route",
	},
	{
		id: 8,
		terminal: "Inglewood",
		decription: "Inglewood 2",
	},
	{
		id: 9,
		terminal: "San Diego",
		decription: "San Diego",
	},
	{
		id: 10,
		terminal: "Cerriots",
		decription: "Cerriots",
	},
];

const createFlag: boolean = false;

function mounted() {}

function create() {
	// this.$router.push({ name: 'dispatchcreation' });
}

function edit(item: any) {
	//  this.currentId = item.id;
}
</script>

<template>
	<div class="container-fluid">
		<!-- <div v-if="!currentId">
			<div class="row align-items-center col-12 col-lg-12">
				<div class="col d-flex align-items-center">
					<div class="float-left mr-2">
						<h5 class="px-2 mb-3 cs-main-heading">
							Dispatch Group Maintenance
						</h5>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-12">
				<div class="row">
					<div class="col-md-8 col-12 mb-md-0" />
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
			<div class="row mt-4">
				<div class="col-12 col-lg-12">
					<div class="card">
						<div v-if="dataArray.length > 0" class="card-body">
							<table class="table table-hover">
								<thead class="grey lighten-2">
									<tr>
										<th>Terminal</th>
										<th>Description</th>
										<th />
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in dataArray" :key="item.id">
										<td>
											<a class="custom-link" @click="edit(item)">{{
												item.terminal
											}}</a>
										</td>
										<td>{{ item.decription }}</td>
										<td>
											<i class="material-icons cursor-pointer">edit</i>
											<i class="material-icons cursor-pointer ml-11">close</i>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="pagination-box mt-5">
				<div class="row align-items-center">
					<ul class="pagination">
						<li class="page-item">
							<a class="page-link" href="#">
								<span aria-hidden="true">«</span>
								<span class="sr-only">Previous</span>
							</a>
						</li>
						<li class="page-item active">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">4</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">5</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">6</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								<span aria-hidden="true">»</span>
								<span class="sr-only">Next</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div v-if="currentId">
			<DispatchComponent :current-id="currentId" />
		</div> -->
	</div>
</template>

<style scoped lang="scss"></style>
