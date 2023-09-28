<script setup lang="ts"></script>

<template>
	<div>
		<!-- <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
			<form @submit.prevent="processForm(handleSubmit)">
				<div class="page-content">
					<div class="container-fluid">
						<div class="row align-items-center">
							<div class="col d-flex align-items-center">
								<div class="float-left mr-2">
									<h5 class="px-2 mb-3 cs-main-heading">Order Entry</h5>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="demo py-3 text-secondary">
											<div class="row">
												<div class="col-md-3 col-12">
													<div>
														<button
															type="button"
															class="btn mr-3 mb-4 btn-yellow"
															@click="handleReset"
														>
															New
														</button>
														<button
															type="submit"
															class="btn mr-4 mb-4 btn-black"
															:disabled="submitDisabled"
														>
															Save
														</button>
													</div>
													<div class="mt-5">
														<label for="">Order Number</label>
														<div class="input-group mb-3">
															<input
																type="text"
																class="form-control"
																aria-label="Amount (to the nearest dollar)"
															/>
															<div class="input-group-append bg-light py-0">
																<button
																	class="btn btn-outline-secondary"
																	type="button"
																	@click="openModal()"
																>
																	<i class="material-icons">search</i>
																</button>
															</div>
														</div>
													</div>
													<div class="clearfix" />
												</div>
												<div class="col-md-2 col-12">
													<div>
														<button
															type="button"
															class="btn mr-4 mb-2 btn-dark btn-block"
															@click="print($event)"
														>
															Print
														</button>
													</div>
													<div>
														<button
															type="button"
															class="btn mr-4 mb-2 btn-dark btn-block"
														>
															Copy
														</button>
													</div>
													<div>
														<button
															type="button"
															class="btn mr-4 mb-2 btn-dark btn-block"
														>
															Delete
														</button>
													</div>
												</div>
												<div class="col-md-2 col-12">
													<label class="custom-control custom-checkbox">
														<input
															v-model="orderObj.ScannerMode"
															type="checkbox"
															:checked="orderObj.ScannerMode"
															class="custom-control-input"
														/>
														<span
															class="custom-control-indicator custom-control-indicator-primary"
														/>
														<span class="custom-control-description"
															>Scanner Mode</span
														>
													</label>
													<div class="form-group">
														<select class="form-control">
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
													</div>
												</div>
												<div class="col-md-5 col-12">
													<div class="row">
														<div class="col-6 text-center">
															<h4>Order Status</h4>
															<h4 class="font-weight-lights text-success">
																{{ orderObj.OrderStatus }}
															</h4>
															<div>
																<button type="button" class="btn mb-2 btn-dark">
																	View
																</button>
															</div>
														</div>
														<div class="col-6">
															<div class="form-group">
																<input
																	id="sampleFormName"
																	v-model="orderObj.OrderDate"
																	type="text"
																	class="form-control"
																	placeholder="Order Date"
																/>
															</div>
															<div class="form-group">
																<input
																	id="sampleFormName1"
																	v-model="orderObj.DueDateTime"
																	type="text"
																	class="form-control"
																	placeholder="Due Date Time"
																/>
															</div>
															<div class="form-group">
																<input
																	id="sampleFormName2"
																	v-model="orderObj.PODDateTime"
																	type="text"
																	class="form-control"
																	placeholder="POD Date Time"
																/>
															</div>
															<div class="form-group mb-0">
																<input
																	id="sampleFormName3"
																	v-model="orderObj.PODName"
																	type="text"
																	class="form-control"
																	placeholder="POD Name"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12 col-md-6 col-lg-4">
								<div class="card mb-2">
									<div class="card-body">
										<form>
											<div class="form-group row align-items-center mb-0">
												<label
													for="staticEmail"
													class="col-3 p-0 col-form-label"
													>Customer#</label
												>
												<div class="col-6">
													<div class="input-group">
														<input
															v-model="selectedCustomer"
															type="text"
															class="form-control"
															aria-label="Amount (to the nearest dollar)"
														/>
														<div class="input-group-append bg-light py-0">
															<button
																class="btn btn-outline-secondary"
																type="button"
																@click="openModal()"
															>
																<i class="material-icons">search</i>
															</button>
														</div>
													</div>
												</div>
												<div class="col-3 mt-4">
													<div class="form-group">
														<Checkbox :checked="true" label="Keep" />
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div>
									<PickUpComponent ref="pickupForm" :pickup-obj="pickupObj" />
								</div>
								<div>
									<DeliveryComponent
										ref="deliveryForm"
										:destination-obj="destinationObj"
									/>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-4">
								<div>
									<DetailComponent ref="detailForm" :detail-obj="detailObj" />
								</div>
								<div>
									<ActionComponent />
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-4">
								<div>
									<RatingComponent ref="ratingForm" :rating-obj="ratingObj" />
								</div>

								<div>
									<JobComponent ref="JobForm" :job-obj="jobObj" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</ValidationObserver> -->
		<div>
			<b-modal
				id="order-modal-customer-search"
				:title="'Order Search'"
				ok-only
				ok-variant="black"
				ok-title="Cancel"
				size="lg"
			>
				<div class="d-block">
					<div>
						<div class="search-filter">
							<!-- <input
								v-model="filterKey"
								type="text"
								class="form-control col-6"
								placeholder="PA580"
								@keyup="filterData"
							/>
							<label class="col-6 mb-0">Filter by Customer</label> -->
						</div>
						<div class="search-results mt45">
							<!-- <div v-for="customer in filteredList" :key="customer.id">
								<ul>
									<li>{{ customer.account_number }}</li>
									<li>
										{{ customer.address_one }} {{ customer.address_two }}
										{{ customer.address_city }} {{ customer.address_state }}
										{{ customer.address_zip }}
									</li>
									<li>
										<a href="#" @click="onCustomerSelect(customer)">Select</a>
									</li>
								</ul>
							</div>
							<div v-if="filteredList.length === 0" class="">
								<span colspan="3">
									<div class="no-data">No Data Available</div>
								</span>
							</div> -->
						</div>
					</div>
				</div>
			</b-modal>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
