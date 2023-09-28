<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
	content?: string;
	modal2?: boolean;
	title?: string;
}>();

const emit = defineEmits(["onConfirm", "onCancel"]);

function hideModal() {
	//this.$bvModal.hide('bv-modal-warning');
}

function onConfirm() {
	// this.modal2 = true;
	// this.$emit('onConfirm', true);
	emit("onConfirm");
}

function onCancel() {
	// this.$emit('onCancel', true);
	emit("onCancel");
}
</script>

<template>
	<b-modal id="bv-modal-warning" :title="title" hide-footer>
		<!-- <template v-slot:modal-title /> -->
		<div class="row mt-4">
			<div class="col-12 col-sm-12 col-md-12 col-lg-12">
				<div class>
					<div class="card-body">
						<div class="form-group">
							<label for="zone" class="control-label">{{ content }}</label>
						</div>
						<div class="form-group">
							<div class="float-right">
								<button
									type="submit"
									class="btn mr-4 mb-4 btn-yellow"
									@click="
										// $bvModal.hide('bv-modal-warning');
										onConfirm()
									"
								>
									Confirm
								</button>
								<button
									type="button"
									class="btn mr-4 mb-4 btn-black"
									@click="
										hideModal();
										onCancel();
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
	<!-- -->
</template>

<style lang="css" scoped>
.text_align {
	text-align: right;
}
.highlight {
	font-weight: bold;
}
</style>
