<script setup lang="ts">
// const routeGeneral: RouteGeneral = new RouteGeneral();

// const submitDisabled: boolean = false;

function mounted() {}

function generalFormSubmit() {
	//   let request = this.routeGeneral.mapToRequest();
	//   console.log('request', request);
	//   this.disableButton().then(() => {
	//     if (request.id) {
	//       RouteDataService.editRoute(request).then((res) => {
	//         if (res.status === 200) {
	//           ToasterService.success({
	//             message: 'Routes updated successfully',
	//           });
	//           this.submitDisabled = false;
	//         }
	//       });
	//     } else {
	//       request = utility.excludeEmptykey(request);
	//       delete request.id;
	//       RouteDataService.createRoute(request).then((resp) => {
	//         console.log(resp, 'RESP');
	//         if (resp && resp.status === 201) {
	//           this.routeGeneral = this.routeGeneral.setData(resp.data.data);
	//           ToasterService.success({
	//             message: 'Routes created successfully',
	//           });
	//           this.submitDisabled = false;
	//         }
	//       });
	//     }
	//   });
}

function disableButton() {
	//   return new Promise((resolve) => {
	//     this.submitDisabled = true;
	//     resolve('resolved');
	//   });
}

function handleReset() {
	//   this.routeGeneral = new RouteGeneral();
}

function handleRoute(value: any) {
	//   Object.assign(this.routeGeneral, this.routeGeneral.setData(value));
}
</script>

<template>
	<div class>
		<div class="row align-items-center">
			<div class="col-12 d-flex align-items-center wrap-all">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Route Maintenance</h5>
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
							>Commission</a
						>
					</li>
				</ul>
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<div class="tab-content">
									<div
										id="1"
										class="tab-pane fade active show"
										role="tabpanel"
										aria-labelledby="spaceships-tab-color"
									>
										<!-- <RouteGeneralComponent
											:route-general="routeGeneral"
											@handleSubmit="generalFormSubmit"
											@handleReset="handleReset"
											@handleRoute="handleRoute"
										/> -->
									</div>
									<!-- <div
										id="2"
										class="tab-pane fade"
										role="tabpanel"
										aria-labelledby="pilots-tab-color"
									>
										<div
											v-if="routeGeneral && routeGeneral.id"
											class="py-3 px-4"
										>
											<CommissionComponent
												:route-general="routeGeneral"
												@handleReset="handleReset"
											/>
										</div>
										<div v-if="!routeGeneral.id">
											<span class="no-data">Please Select a Route!!</span>
										</div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
