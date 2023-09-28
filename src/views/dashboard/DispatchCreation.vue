<script setup lang="ts">
import { defaultType, defaultSegment } from "../../constants/common-options";

const currentId: any = null;

const typeOptions = defaultType;

const segmentOptions = defaultSegment;

const selected = "";

function mounted() {
	// console.log(this.currentId, "IDD");
}

function processForm(handleSubmit: any) {
	// handleSubmit(this.submit);
}

function submit() {
	// this.$emit("handleSubmit");
}
</script>

<template>
	<!-- <ValidationObserver v-slot="{ handleSubmit }">
		<form @submit.prevent="processForm(handleSubmit)">
			<div class="col-12 col-md-12 col-lg-6 my-4">
				<div class="card">
					<div class="card-body">
						<div class="row align-items-center">
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										rules=""
									>
										<CustomTextInput
											name="group"
											label="Dispatch Group"
											placeholder="Dispatch Group"
											type="text"
											:errors="errors"
											autocomplete="group"
										/>
									</ValidationProvider>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<ValidationProvider
										v-slot="{ errors }"
										mode="passive"
										rules=""
									>
										<CustomTextInput
											name="description"
											label="Description"
											placeholder="Description"
											type="text"
											:errors="errors"
											autocomplete="description"
										/>
									</ValidationProvider>
								</div>
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<label for="">Segment</label>
									<b-form-select
										v-model="selected"
										class="w-100 form-control"
										:options="segmentOptions"
									/>
								</div>
							</div>
							<div class="col-md-6 col-12 mb-md-0">
								<div class="form-group">
									<label for="">Type</label>
									<b-form-select
										v-model="selected"
										class="w-100 form-control"
										:options="typeOptions"
									/>
								</div>
							</div>
						</div>
						<div class="col-md-12 col-12 mb-md-0">
							<div class="float-right mt-2">
								<button type="submit" class="btn btn-black">OK</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</ValidationObserver> -->
</template>

<style scoped lang="scss"></style>
