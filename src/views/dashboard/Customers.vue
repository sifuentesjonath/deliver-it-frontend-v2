<template>
	<div class>
		<div class="row align-items-center">
			<div class="col-12 d-flex align-items-center wrap-all">
				<div class="float-left mr-2">
					<h5 class="px-2 mb-3 cs-main-heading">Customer Maintenance</h5>
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
							@click="tabSelected"
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
							>Billing</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#3"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							@click="tabChanged('Service')"
							>Services & Rates</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#4"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							@click="tabChanged('Fees')"
							>Fees</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#5"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							@click="tabChanged('Contacts')"
							>Contacts</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#6"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							@click="tabChanged('Notifications')"
							>Notifications</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#7"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							@click="tabChanged('Shippers')"
							>Shippers</a
						>
					</li>
					<li class="nav-item">
						<a
							id="pilots-tab-color"
							class="nav-link"
							data-toggle="tab"
							href="#8"
							role="tab"
							aria-controls="pilots-color"
							aria-selected="false"
							@click="tabChanged('AddressBook')"
							>Address Book</a
						>
					</li>
				</ul>
				<!-- <div class="row">
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
                    <GeneralComponent
                      :customer="customerGeneral"
                      :companies="companies"
                      :customer-groups="customerGroups"
                      :sales-persons="salesPersonData"
                      :file-obj="fileObj"
                      @handleSubmit="submit"
                      @handleReset="handleReset"
                      @handleCustomer="handleCustomer"
                    />
                  </div>

                  <div
                    id="2"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div class="py-3 px-4">
                      <BillingComponent
                        ref="billing"
                        :customer="customer"
                        @handleSubmit="submit"
                      />
                    </div>
                  </div>
                  <div
                    id="3"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div
                      v-if="customer && customer.id"
                      class="py-3 px-4"
                    >
                      <ServiceListingPage :customer="customer" />
                    </div>
                    <div v-if="!customer.id">
                      <span class="no-data">Please Select a Customer!!</span>
                    </div>
                  </div>
                  <div
                    id="4"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div
                      v-if="customer && customer.id"
                      class="py-3 px-4"
                    >
                      <CustomerFeesComponent
                        :customer="customer"
                        :fee-obj="feeObj"
                        @handleForm="tabChanged"
                      />
                    </div>
                    <div v-if="!customer.id">
                      <span class="no-data">Please Select a Customer!!</span>
                    </div>
                  </div>
                  <div
                    id="5"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div
                      v-if="customer && customer.id"
                      class="py-3 px-4"
                    >
                      <ContactComponent
                        :tab="tab"
                        :customer="customer"
                        :contact="contact"
                        @handleForm="tabChanged"
                      />
                    </div>
                    <div v-if="!customer.id">
                      <span class="no-data">Please Select a Customer!!</span>
                    </div>
                  </div>
                  <div
                    id="6"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div
                      v-if="customer && customer.id"
                      class="py-3 px-4"
                    >
                      <NotificationComponent
                        ref="notification"
                        :customer="customer"
                        :notification-obj="notificationObj"
                        @handleForm="tabChanged"
                      />
                    </div>
                    <div v-if="!customer.id">
                      <span class="no-data">Please Select a Customer!!</span>
                    </div>
                  </div>
                  <div
                    id="7"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div
                      v-if="customer && customer.id"
                      class="py-3 px-4"
                    >
                      <ShipperComponent
                        :customer="customer"
                        :shipper="shipper"
                        :service-obj="serviceObj"
                        @handleForm="tabChanged"
                      />
                    </div>
                    <div v-if="!customer.id">
                      <span class="no-data">Please Select a Customer!!</span>
                    </div>
                  </div>
                  <div
                    id="8"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pilots-tab-color"
                  >
                    <div
                      v-if="customer && customer.id"
                      class="py-3 px-4"
                    >
                      <AddressBookComponent
                        :customer="customer"
                        :address-book="addressBook"
                        @handleForm="tabChanged"
                      />
                    </div>
                    <div v-if="!customer.id">
                      <span class="no-data">Please Select a Customer!!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import {  Vue } from 'vue-property-decorator';
// import { Action, Getter } from 'vuex-class';
// import CustomTextInput from '@/components/inputs/CustomTextInput.vue';
// import ServicesComponent from '@/views/components/ServicesComponent.vue';
// import GeneralComponent from '@/views/components/GeneralComponent.vue';
// import BillingComponent from '@/views/components/BillingComponent.vue';
// import ServiceListingPage from '@/views/ServiceListingPage.vue';
// import ContactComponent from '@/views/components/ContactComponent.vue';
// import CustomerFeesComponent from '@/views/components/CustomerFeesComponent.vue';
// import ShipperComponent from '@/views/components/ShipperComponent.vue';
// import NotificationComponent from '@/views/components/NotificationComponent.vue';
// import AddressBookComponent from '@/views/components/AddressBookComponent.vue';
// import CustomerDataService from '../services/api/CustomerDataService';
// import { utility } from '../components/utils/utility';
// import { Customer } from '../models/customer';
// import { CustomerGeneral } from '../models/CustomerGeneral';
// import ToasterService from '../services/api/ToasterService';
// import { AddressBook } from '../models/AddressBook';
// import { Contact } from '../models/Contact';
// import { Shippers } from '../models/Shippers';
// import { ShipperServiceModel } from '../models/ShipperService';
// import { Notification } from '../models/Notification';
// import { CustomerFee } from '../models/CustomerFee';
// import { Document } from '../models/Document';
// import FileDataService from '../services/api/FileDataService';

// @Action('company/companies') companyAction: any;

// @Getter('company/getCompanies') getCompaniesData: any;

// @Action('customer/customerByID') customerByIdAction: any;

// @Action('customer/customerGroups') customerGroupsAction: any;

// @Getter('customer/getCustomers') getCustomers: any;

// @Getter('customer/getCustomerGroups') fetchCustomerGroups: any;

// @Getter('auth/user') user: any;

// @Action('salesPerson/salespersons') salespersonsAction: any;

// @Getter('salesPerson/getSalesPerson') getSalesPersonData: any;

//   const customer: Customer = new Customer();
//   const customerGeneral: CustomerGeneral = new CustomerGeneral();
//   const addressBook: AddressBook = new AddressBook();
//   const contact: Contact = new Contact();
//   const shipper: Shippers = new Shippers();
//   const serviceObj: ShipperServiceModel = new ShipperServiceModel();
//   const notificationObj: Notification = new Notification();
//   const feeObj: CustomerFee = new CustomerFee();
//   const submitDisabled: boolean = false;
//   const customerGroups: any = [];
//   const salesPersonData: any = [];
//   const companies: { value: string; text: string }[] = [];
//   const tab: any = '';
//   const id: any;
//   const nfObject = new Intl.NumberFormat('en-US');
//   const fileObj: Document = new Document();

function data() {
	return {
		companies: [],
		customer: new Customer(),
	};
}

// function mounted() {
//   this.initCompanyDropdown();
//   this.initCustomerGroupDropdown();
//   this.initSalesPersonDropdown();
// }

function initCompanyDropdown() {
	// this.companies = this.getCompaniesData;
	// if (this.companies && this.companies.length === 0) {
	//   this.companyAction().then(() => {
	//     this.formatData(true);
	//   });
	// } else {
	//   this.formatData(true);
	// }
}

function tabSelected(params: any) {
	//  this.tab = params;
}

async function initCustomerGroupDropdown() {
	// this.customerGroups = this.fetchCustomerGroups;
	// if (
	//   Array.isArray(this.customerGroups)
	//   && this.customerGroups.length === 0
	// ) {
	//   const customerGroupData = await this.customerGroupsAction();
	//   if (customerGroupData && customerGroupData.data.length > 0) {
	//     this.formatData();
	//   }
	// } else {
	//   this.formatData();
	// }
}

async function initSalesPersonDropdown() {
	// this.salesPersonData = this.getSalesPersonData;
	// if (
	//   // Array.isArray(this.salesPersonData)
	//   // && this.salesPersonData.length === 0
	//   !this.salesPersonData
	// ) {
	//   const salesPersonData = await this.salespersonsAction();
	//   if (salesPersonData && salesPersonData.data.length > 0) {
	//     const newArrayOfObj = salesPersonData.data.map(
	//       ({ first_name: name, ...rest }: any) => ({
	//         name,
	//         ...rest,
	//       }),
	//     );
	//     this.salesPersonData = utility.mapCustomDropdown(
	//       'name',
	//       'id',
	//       newArrayOfObj,
	//       'Sales Person',
	//     );
	//   }
	// } else if (this.getSalesPersonData) {
	//   const newArrayOfObj = this.getSalesPersonData.map(
	//     ({ first_name: name, ...rest }: any) => ({
	//       name,
	//       ...rest,
	//     }),
	//   );
	//   this.salesPersonData = utility.mapCustomDropdown(
	//     'name',
	//     'id',
	//     newArrayOfObj,
	//     'Sales Person',
	//   );
	// }
	// console.log('salesPersonData----------', this.salesPersonData);
}

// submit(value) {
//   const request = value.generalFlag
//     ? this.customerGeneral.mapToRequest()
//     : this.customer.mapToRequest();
//   this.disableButton().then(() => {
//     if (request.id) {
//       CustomerDataService.editCustomer(request).then((res) => {
//         if (res.status === 200) {
//           this.fileUpload();
//           this.getCustomerById(request.id);
//           this.submitDisabled = false;
//           ToasterService.success({
//             message: 'Customer updated successfully',
//           });
//         }
//       });
//     } else {
//       delete request.id;
//       CustomerDataService.createCustomer(request).then((resp) => {
//         if (resp && resp.status === 201) {
//           this.fileUpload();
//           this.setData(resp.data.data);
//           this.submitDisabled = false;
//           ToasterService.success({
//             message: 'Customer created successfully',
//           });
//         }
//       });
//     }
//   });
// }

// handleReset() {
//   // console.log('handle reset form called');
//   this.submitDisabled = false;
//   this.customer = new Customer();
//   this.customerGeneral = new CustomerGeneral();
//   this.fileObj = new Document();
//   // this.$refs.billing.clearValidation();
// }

// disableButton() {
//   return new Promise((resolve) => {
//     this.submitDisabled = true;
//     resolve('resolved');
//   });
// }

// handleCustomer(data: any) {
//   this.handleReset();
//   this.id = data.id;
//   this.getCustomerById(data.id);
// }

// getCustomerById(id: any) {
//   // const { user } = this;
//   console.log('ID', id);
//   if (id) {
//     this.customerByIdAction(id).then((data: any) => {
//       if (typeof data === 'object' && data !== null) this.setData(data);
//     });
//   }
// }

// setData(data: any) {
//   this.customer = Object.assign(new Customer(), data);
//   this.customerGeneral = Object.assign(new CustomerGeneral(), data);
//   this.customer = utility.mapDataToString(this.customer);
//   this.formatResponseData(data);
// }

// formatResponseData(data) {
//   this.customerGeneral.salesperson_id = {
//     id: data.salesperson_id.id,
//     name: `${data.salesperson_id.first_name}  ${data.salesperson_id.last_name}`,
//   };
//   // initialise customer group dropdown
//   if (data.customer_group) {
//     this.customerGeneral.customer_group_id = {
//       id: data.customer_group.id,
//       name: data.customer_group.name,
//     };
//   }
//   if (this.customer.billing_credit_limit) {
//     this.customer.billing_credit_limit = this.nfObject.format(
//       this.customer.billing_credit_limit,
//     );
//   }
// }

// getCustomerGroups() {
//   const { user } = this;
//   if (user) {
//     this.customerGroupsAction().then((res: any) => {
//       if (typeof res === 'object' && res !== null) this.customerGroups = res.data;
//     });
//   }
// }

// formatData(isCompany = false) {
//   if (isCompany) {
//     this.companies = utility.mapCustomDropdown(
//       'name',
//       'id',
//       this.getCompaniesData,
//       'Organization',
//     );
//     return;
//   }
//   this.customerGroups = utility.mapCustomDropdown(
//     'name',
//     'id',
//     this.fetchCustomerGroups.data,
//     'Customer Groups',
//   );
// }

// fileUpload() {
//   const formData = new FormData();
//   if (!this.fileObj.file) return;
//   if (!this.customerGeneral.id) return;
//   formData.append('file', this.fileObj.file);
//   formData.append('model_id', this.customerGeneral.id);
//   formData.append('model', this.fileObj.model);
//   formData.append('description', this.fileObj.description);

//   FileDataService.createFile(formData).then((res) => {
//     // console.log(res, 'Response');
//     this.fileObj = new Document();
//     if (res && res.data) {
//       // this.docList.push(res.data.data);
//       ToasterService.success({ message: 'Document uploaded successfully' });
//     }
//   });
// }

// tabChanged(params: any) {
//   switch (params) {
//     case 'Contacts':
//       this.contact = new Contact();
//       break;
//     case 'Shippers':
//       this.shipper = new Shippers();
//       this.serviceObj = new ShipperServiceModel();
//       break;
//     case 'Shipper Service':
//       this.serviceObj = new ShipperServiceModel();
//       break;
//     case 'Notifications':
//       this.notificationObj = new Notification();
//       // this.$refs.notification.resetEvent();
//       break;
//     case 'Fees':
//       this.feeObj = new CustomerFee();
//       break;
//     case 'Service':
//       break;
//     case 'AddressBook':
//       this.addressBook = new AddressBook();
//       break;
//     default:
//       console.log('No such Tab');
//   }
// }
</script>
<style scoped lang="scss"></style>
