<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
	title: any;
	data: any;
}>();

const emit = defineEmits(["OnSelect"]);

// hideModal() {
//   this.$root.$emit('bv::hide::modal', 'modal-1');
// }
</script>

<template>
	<b-modal
		id="modal-search"
		:title="title"
		ok-only
		ok-variant="black"
		ok-title="Cancel"
		size="lg"
	>
		<div class="d-block">
			<div v-if="data.length !== 0">
				<div>
					<table class="table table-scroll small-first-col">
						<thead>
							<tr>
								<th>Account Number</th>
								<th>Company Name</th>
								<th>Address</th>
								<th>City</th>
								<th>Zip Code</th>
								<th />
							</tr>
						</thead>
						<tbody class="body-half-screen">
							<tr v-for="item in data" :key="item.id">
								<td>{{ item.account_number }}</td>
								<td>{{ item.company_name }}</td>
								<td>{{ item.address_one }}</td>
								<td>{{ item.address_city }}</td>
								<td>{{ item.address_zip }}</td>
								<td>
									<a class="custom-link" @click="emit('OnSelect', item)"
										>Select</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div v-if="data.length === 0">
				<span class="px-0 font-bold">NO DATA FOUND</span>
			</div>
		</div>
	</b-modal>
</template>

<style lang="css" scoped></style>
