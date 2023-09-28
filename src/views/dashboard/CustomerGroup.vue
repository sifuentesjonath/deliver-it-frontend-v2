<script setup lang="ts"></script>

<template>
	<div class="container-fluid">
		<!-- <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
			<form @submit.prevent="handleSubmit(onSubmit)">
				<div class="row align-items-center">
					<div class="col d-flex align-items-center">
						<div class="float-left mr-2">
							<h5 class="px-2 mb-3 cs-main-heading">Customer Group</h5>
						</div>
						<div class="float-left">
							<button
								type="button"
								class="btn mr-3 mb-4 btn-yellow"
								@click="clearForm"
							>
								New
							</button>
							<button
								type="submit"
								class="btn mr-4 mb-4 btn-black"
								:disabled="submitDisabled"
							>
								{{ customerGroup.id ? "Update" : "Save" }}
							</button>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<div class="demo py-3 text-secondary">
									<div class="row">
										<div class="col-md-2 col-sm-4 col-12">
											<div class="form-group pr-4">
												<CustomTextInputValidation
													v-model="customerGroup.name"
													:field-input.sync="customerGroup.name"
													name="Group Name"
													label
													placeholder="Group Name"
													autocomplete="code"
													rules="required|minmax:1,30"
												/>
											</div>
										</div>
										<div class="col-md-4 col-sm-4 col-12">
											<div class="form-group">
												<CustomTextInputValidation
													v-model="customerGroup.description"
													:field-input.sync="customerGroup.description"
													name="Description"
													placeholder="Description"
													label
													autocomplete="Description"
													rules="required"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</ValidationObserver> -->
		<div class="row mt-4">
			<div class="col-12 col-lg-12">
				<!-- <div v-if="customerGroupData.length > 0" class="card">
					<div class="card-body">
						<table class="table table-hover">
							<thead class="grey lighten-2">
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="eachCustomer in customerGroupData"
									:key="eachCustomer.id"
								>
									<td>{{ eachCustomer.name }}</td>
									<td>{{ eachCustomer.description }}</td>
									<td>
										<i
											class="material-icons cursor-pointer"
											@click="ediCustomerGroup(eachCustomer)"
											>edit</i
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
