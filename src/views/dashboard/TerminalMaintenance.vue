<script setup lang="ts">
const currentId: any = null;

const dataArray: any = [
	{
		id: 1,
		terminal: "LAC",
		area: "Los angeles",
	},
	{
		id: 2,
		terminal: "RIV",
		area: "Riverside",
	},
	{
		id: 3,
		terminal: "BUR",
		area: "Burbank",
	},
	{
		id: 4,
		terminal: "SDC",
		area: "San Diago 1",
	},
	{
		id: 5,
		terminal: "OC1",
		area: "Orange County 1",
	},
	{
		id: 6,
		terminal: "OC2",
		area: "Orange County 2",
	},
	{
		id: 7,
		terminal: "EST",
		area: "East LA",
	},
	{
		id: 8,
		terminal: "PMF",
		area: "Pomona",
	},
	{
		id: 9,
		terminal: "DUB",
		area: "Dublin",
	},
	{
		id: 10,
		terminal: "NOT",
		area: "North orange terminal",
	},
];

const createFlag: boolean = false;

function mounted() {}

function create() {
	// this.$router.push({ name: 'terminalcreation' });
}

function filterData(filterObj: any) {
	//  console.log(filterObj, 'VALUE RECEIVED');
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
						<h5 class="px-2 mb-3 cs-main-heading">Terminal Maintenance</h5>
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
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in dataArray" :key="item.id">
										<td>
											<a class="custom-link" @click="edit(item)">{{
												item.terminal
											}}</a>
										</td>
										<td>{{ item.area }}</td>
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
      </div>
		</div> -->
		<!-- <div v-if="currentId">
			<TerminalCreationComponent :current-id="currentId" />
		</div> -->
	</div>
</template>

<style scoped lang="scss"></style>
