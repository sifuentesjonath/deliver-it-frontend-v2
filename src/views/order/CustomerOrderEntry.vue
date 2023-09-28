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
									<h5 class="px-2 mb-3 cs-main-heading">
										Customer Order Entry
									</h5>
								</div>
							</div>
						</div>

						<div class="row mt-4">
							<div class="col-12 col-md-6 col-lg-4">
								<div>
									<h5 class="card-title mb-5">Pickup Info</h5>
									<div class="card mb-2">
										<div class="card-body">
											<div class="row">
												<div class="col-8">
													<div class="form-group">
														<label for="shipToCode" class="control-label"
															>Ship To Code</label
														>
														<input
															v-model="customerOrderObj.pickupInfo.shipToCode"
															type="text"
															class="form-control"
															aria-label="Amount (to the nearest dollar)"
															placeholder="Ship To Code"
														/>
													</div>
												</div>
												<div class="col-4">
													<a href="#">Lookup</a>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Name</label>
														<input
															v-model="customerOrderObj.pickupInfo.name"
															class="form-control"
															name="name"
															label
															placeholder="Name"
															type="text"
															autocomplete="Name"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Street 1</label>
														<input
															v-model="customerOrderObj.pickupInfo.street1"
															class="form-control"
															name="Pickup Street 1"
															label
															placeholder="Street 1"
															type="text"
															autocomplete="Street 1"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Street 2</label>
														<input
															v-model="customerOrderObj.pickupInfo.street2"
															class="form-control"
															name="Pickup Street 2"
															label
															placeholder="Street 2"
															type="text"
															autocomplete="Street 2"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">City</label>
														<input
															v-model="customerOrderObj.pickupInfo.city"
															class="form-control"
															name="city"
															label
															placeholder="City"
															type="text"
															autocomplete="City"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">State</label>
														<b-form-select
															v-model="customerOrderObj.pickupInfo.state"
															class="w-100 form-control"
															:options="stateListOptions"
														/>
													</div>
												</div>
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Zip</label>
														<input
															v-model="customerOrderObj.pickupInfo.zip"
															class="form-control"
															name="zip"
															label
															placeholder="Zip"
															type="text"
															autocomplete="zip"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Contact #</label>
														<input
															v-model="customerOrderObj.pickupInfo.contact"
															class="form-control"
															name="contact"
															label
															placeholder="Contact"
															type="text"
															autocomplete="contact"
														/>
													</div>
												</div>
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Phone</label>
														<input
															v-model="customerOrderObj.pickupInfo.phone"
															class="form-control"
															name="phone"
															label
															placeholder="Phone"
															type="text"
															autocomplete="phone"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Email</label>
														<input
															v-model="customerOrderObj.pickupInfo.email"
															class="form-control"
															name="email"
															label
															placeholder="Email"
															type="text"
															autocomplete="email"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-4">
								<div>
									<h5 class="card-title mb-5">Destination Info</h5>
									<div class="card mb-2">
										<div class="card-body">
											<div class="row float-right">
												<a href="#">Lookup</a>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="shipToCode" class="control-label"
															>Ship To Code</label
														>
														<input
															v-model="
																customerOrderObj.destinationInfo.shipToCode
															"
															type="text"
															class="form-control"
															aria-label="Amount (to the nearest dollar)"
															placeholder="Ship To Code"
														/>
													</div>
												</div>
												<div class="col-6 mt-8">
													<div class="form-group">
														<Checkbox label="Scanner Mode" />
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Name</label>
														<input
															v-model="customerOrderObj.destinationInfo.name"
															class="form-control"
															name="name"
															label
															placeholder="Name"
															type="text"
															autocomplete="Name"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Street 1</label>
														<input
															v-model="customerOrderObj.destinationInfo.street1"
															class="form-control"
															name="Pickup Street 1"
															label
															placeholder="Street 1"
															type="text"
															autocomplete="Street 1"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Street 2</label>
														<input
															v-model="customerOrderObj.destinationInfo.street2"
															class="form-control"
															name="Pickup Street 2"
															label
															placeholder="Street 2"
															type="text"
															autocomplete="Street 2"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">City</label>
														<input
															v-model="customerOrderObj.destinationInfo.city"
															class="form-control"
															name="city"
															label
															placeholder="City"
															type="text"
															autocomplete="City"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">State</label>
														<b-form-select
															v-model="customerOrderObj.destinationInfo.state"
															class="w-100 form-control"
															:options="stateListOptions"
														/>
													</div>
												</div>
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Zip</label>
														<input
															v-model="customerOrderObj.destinationInfo.zip"
															class="form-control"
															name="zip"
															label
															placeholder="Zip"
															type="text"
															autocomplete="zip"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Contact #</label>
														<input
															v-model="customerOrderObj.destinationInfo.contact"
															class="form-control"
															name="contact"
															label
															placeholder="Contact"
															type="text"
															autocomplete="contact"
														/>
													</div>
												</div>
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Phone</label>
														<input
															v-model="customerOrderObj.destinationInfo.phone"
															class="form-control"
															name="phone"
															label
															placeholder="Phone"
															type="text"
															autocomplete="phone"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="form-label">Email</label>
														<input
															v-model="customerOrderObj.destinationInfo.email"
															class="form-control"
															name="email"
															label
															placeholder="Email"
															type="text"
															autocomplete="email"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-4">
								<div>
									<h5 class="card-title mb-5">Additional Details</h5>
									<div class="card mb-2">
										<div class="card-body">
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="" class="control-label"
															>Service Type</label
														>
														<b-form-select
															v-model="
																customerOrderObj.additionalDetails.serviceId
															"
															class="w-100 form-control"
															:options="serviceOptions"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-9" />
												<div class="col-3">
													<div class="form-group">
														<Checkbox label="Keep" />
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-7">
													<div class="form-group">
														<label for="" class="form-label">Ready Date</label>
														<datepicker
															v-model="
																customerOrderObj.additionalDetails.readyDate
															"
															:format="format"
															placeholder="Ready Date"
															name="ready_date"
															:clear-button="true"
														/>
													</div>
												</div>
												<div class="col-5">
													<div class="form-group">
														<label for="" class="form-label">Ready Time</label>
														<vue-timepicker
															v-model="
																customerOrderObj.additionalDetails.readyTime
															"
															format="HH:mm"
														/>
													</div>
												</div>
											</div>

											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Pieces</label>
														<input
															v-model="
																customerOrderObj.additionalDetails.pieces
															"
															class="form-control"
															name="Pieces"
															label
															placeholder="Pieces"
															type="text"
															autocomplete="Pieces"
														/>
													</div>
												</div>
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Weight</label>
														<input
															v-model="
																customerOrderObj.additionalDetails.weight
															"
															class="form-control"
															name="Weight"
															label
															placeholder="Weight"
															type="text"
															autocomplete="Weight"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Reference 1</label>
														<input
															v-model="
																customerOrderObj.additionalDetails.reference1
															"
															class="form-control"
															name="reference1"
															label
															placeholder="Reference 1"
															type="text"
															autocomplete="reference1"
														/>
													</div>
												</div>
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label"
															>Declared value</label
														>
														<input
															v-model="customerOrderObj.additionalDetails.value"
															class="form-control"
															name="value"
															label
															placeholder="value"
															type="text"
															autocomplete="value"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label">Reference 2</label>
														<input
															v-model="
																customerOrderObj.additionalDetails.reference2
															"
															class="form-control"
															name="reference2"
															label
															placeholder="Reference 2"
															type="text"
															autocomplete="reference2"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label for="">Driver Instruction</label>
														<textarea
															id="driver_instruction"
															v-model="
																customerOrderObj.additionalDetails
																	.driver_instruction
															"
															class="form-control"
															rows="3"
															placeholder="Driver Instruction"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="form-group">
														<label for="" class="form-label"
															>Select label</label
														>
														<b-form-select
															v-model="customerOrderObj.additionalDetails.label"
															class="w-100 form-control"
															:options="labelList"
														/>
													</div>
												</div>
												<div class="col-6 mt-8">
													<div class="form-group">
														<Checkbox
															v-model="
																customerOrderObj.additionalDetails.autoPrint
															"
															label="Auto Print"
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6" />
												<div class="col-6">
													<div class="form-group">
														<button type="button" class="btn mr-2 btn-yellow">
															Print
														</button>
														<button type="submit" class="btn btn-black">
															Save
														</button>
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
			</form>
		</ValidationObserver> -->
	</div>
</template>

<style scoped lang="scss"></style>
