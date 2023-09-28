// import { utility } from "@/components/utils/utility";

interface DynamicRatings {
	from: any;
	id: any;
	service_id: any;
	to: any;
	increment: any;
	base_rate: any;
	zone_id: any;
}
export class Service {
	terminal_id: any;

	service_type_id: any;

	name: any;

	code: any;

	description: any;

	miles_from: any;

	miles_to: any;

	// zip_from: any;

	// zip_to: any;

	weight_from: any;

	route_from: any;

	route_to: any;

	weight_to: any;

	available_days: any[] = [];

	// transit_days: any;

	night_entry: any;

	due_time: any;

	time_past_ready: any;

	count_weekends: any;

	count_holidays: any;

	active: any;

	default: any;

	company_id: any;

	id: any;

	zone: any;

	rate_method_id: any;

	rate_type_id: any;

	ratings: DynamicRatings[] = [];

	terminal: any;

	minimum_order_fee: any;

	isCustomer: boolean;

	delivery_zone_from: any;

	delivery_zone_to: any;

	pickup_zone_from: any;

	pickup_zone_to: any;

	parent_service_id: any;

	customer_id: any;

	ready_time_from: any;

	ready_time_to: any;

	default_availability: any;

	default_due_time: any;

	constructor() {
		this.terminal_id = "";
		this.service_type_id = "";
		this.name = "";
		this.code = "";
		this.description = "";
		this.miles_from = "";
		this.miles_to = "";
		this.delivery_zone_from = "";
		this.delivery_zone_to = "";
		this.pickup_zone_from = "";
		this.pickup_zone_to = "";
		// this.zip_from = '';
		// this.zip_to = '';
		this.weight_from = "";
		this.weight_to = "";
		this.available_days = [];
		// this.transit_days = '';
		this.night_entry = false;
		this.due_time = "";
		this.time_past_ready = "";
		this.count_weekends = false;
		this.count_holidays = false;
		this.active = true;
		this.default = false;
		this.company_id = "";
		this.id = "";
		this.zone = "";
		this.rate_method_id = "";
		this.rate_type_id = "";
		this.terminal = "";
		this.route_to = "";
		this.route_from = "";
		this.ratings = [
			{
				from: "",
				id: "",
				service_id: "",
				to: "",
				increment: "",
				base_rate: "",
				zone_id: "",
			},
		];
		this.minimum_order_fee = null;
		this.isCustomer = false;
		this.time_past_ready = "";
		this.ready_time_from = "";
		this.ready_time_to = "";
		this.default_availability = false;
		this.default_due_time = false;
	}

	// setServiceSetupData(serviceRow: any, isDueTime: boolean) {
	//   const data = {
	//     customer_id: serviceRow.customer_id,
	//     code: serviceRow.code,
	//     name: serviceRow.name,
	//     id: serviceRow.id,
	//     terminal_id: serviceRow.terminal_id ? serviceRow.terminal_id.id : '',
	//     description: serviceRow.description,
	//     miles_from: serviceRow.miles_from,
	//     miles_to: serviceRow.miles_to,
	//     route_from: serviceRow.route_from,
	//     route_to: serviceRow.route_to,
	//     // zip_from: serviceRow.zip_from,
	//     // zip_to: serviceRow.zip_to,
	//     zone_from: serviceRow.zone_from,
	//     zone_to: serviceRow.zone_to,
	//     weight_from: serviceRow.weight_from,
	//     weight_to: serviceRow.weight_to,
	//     night_entry: isDueTime ? serviceRow.night_entry : false,
	//     count_weekends: isDueTime ? !!serviceRow.count_weekends : false,
	//     count_holidays: isDueTime ? !!serviceRow.count_holidays : false,
	//     time_past_ready: isDueTime ? serviceRow.time_past_ready : '',
	//     // transit_days: isDueTime ? serviceRow.transit_days : '',
	//     due_time: isDueTime ? serviceRow.due_time : { HH: '', mm: '' },
	//     delivery_zone_from: serviceRow.delivery_zone_from,
	//     company_id: serviceRow.company_id.id,
	//     delivery_zone_to: serviceRow.delivery_zone_to,
	//     pickup_zone_from: serviceRow.pickup_zone_from,
	//     pickup_zone_to: serviceRow.pickup_zone_to,
	//     ratings: serviceRow.rates.map((el: any) => ({
	//       ...el,
	//       from: el.from,
	//       id: '',
	//       service_id: el.service_id.id,
	//       to: el.to,
	//       zone_id: el.zone_id ? el.zone_id.id : null,
	//       base_rate: el.base_rate,
	//       increment: el.increment,
	//     })),
	//     minimum_order_fee: serviceRow.minimum_order_fee,
	//     active: !!serviceRow.active,
	//     service_type_id: serviceRow.service_type_id ? serviceRow.service_type_id.id : '',
	//     rate_method_id: serviceRow.rate_method_id,
	//     rate_type_id: serviceRow.rate_type_id,
	//     ready_time_from: serviceRow.ready_time_from ? serviceRow.ready_time_from : '',
	//     ready_time_to: serviceRow.ready_time_to ? serviceRow.ready_time_to : '',
	//     default_availability: serviceRow.default_availability === 1,
	//     default_due_time: serviceRow.default_due_time,
	//   };
	//   return data;
	// }

	setServiceSetupData(serviceRow: any, isDueTime: boolean) {
		const data = {
			customer_id: serviceRow.customer_id,
			code: serviceRow.code,
			name: serviceRow.name,
			id: serviceRow.id,
			terminal_id: serviceRow.terminal_id ? serviceRow.terminal_id.id : "",
			description: serviceRow.description,
			miles_from: serviceRow.miles_from,
			miles_to: serviceRow.miles_to,
			route_from: serviceRow.route_from,
			route_to: serviceRow.route_to,
			zone_from: serviceRow.zone_from,
			zone_to: serviceRow.zone_to,
			weight_from: serviceRow.weight_from,
			weight_to: serviceRow.weight_to,
			night_entry: serviceRow.night_entry,
			count_weekends: !!serviceRow.count_weekends,
			count_holidays: !!serviceRow.count_holidays,
			time_past_ready: serviceRow.time_past_ready,
			due_time: serviceRow.due_time,
			delivery_zone_from: serviceRow.delivery_zone_from,
			company_id: serviceRow.company_id ? serviceRow.company_id.id : "",
			delivery_zone_to: serviceRow.delivery_zone_to,
			pickup_zone_from: serviceRow.pickup_zone_from,
			pickup_zone_to: serviceRow.pickup_zone_to,
			ratings: serviceRow.rates.map((el: any) => ({
				...el,
				from: el.from,
				id: "",
				service_id: el.service_id.id,
				to: el.to,
				zone_id: el.zone_id ? el.zone_id.id : null,
				base_rate: el.base_rate,
				increment: el.increment,
			})),
			minimum_order_fee: serviceRow.minimum_order_fee,
			active: !!serviceRow.active,
			service_type_id: serviceRow.service_type_id
				? serviceRow.service_type_id.id
				: "",
			rate_method_id: serviceRow.rate_method_id,
			rate_type_id: serviceRow.rate_type_id,
			ready_time_from: serviceRow.ready_time_from
				? serviceRow.ready_time_from
				: "",
			ready_time_to: serviceRow.ready_time_to ? serviceRow.ready_time_to : "",
			default_availability: serviceRow.default_availability,
			default_due_time: serviceRow.default_due_time,
		};
		return data;
	}

	mapToRequest() {
		const request: any = {
			terminal_id: this.terminal_id,
			service_type_id: this.service_type_id ? this.service_type_id : "",
			id: this.id,
			name: this.name,
			code: this.code,
			description: this.description,
			miles_from: this.miles_from,
			miles_to: this.miles_to,
			route_from: this.route_from,
			route_to: this.route_to,
			// zip_from: this.zip_from,
			// zip_to: this.zip_to,
			weight_from: this.weight_from,
			weight_to: this.weight_to,
			available_days: this.available_days,
			// transit_days: this.transit_days,
			night_entry: this.night_entry ? "1" : "0",
			due_time: this.due_time ? utility.formatTime(this.due_time) : "",
			time_past_ready: this.time_past_ready,
			count_weekends: this.count_weekends ? "1" : "0",
			count_holidays: this.count_holidays ? "1" : "0",
			active: this.active ? "1" : "0",
			company_id: this.company_id,
			minimum_order_fee: this.minimum_order_fee,
			delivery_zone_from: this.delivery_zone_from,
			delivery_zone_to: this.delivery_zone_to,
			pickup_zone_from: this.pickup_zone_from,
			pickup_zone_to: this.pickup_zone_to,
			rate_method_id: this.rate_method_id,
			rate_type_id: this.rate_type_id,
			ready_time_from: this.ready_time_from ? this.ready_time_from : "",
			ready_time_to: this.ready_time_to ? this.ready_time_to : "",
			default_availability: this.default_availability ? "1" : "0",
			default_due_time: this.default_due_time ? "1" : "0",
		};
		return request;
	}

	setCustomerServiceData(serviceRow: any) {
		const data = {
			available_days: serviceRow.available_days,
			code: serviceRow.code,
			name: serviceRow.name,
			terminal_id: serviceRow.terminal_id ? serviceRow.terminal_id.id : "",
			description: serviceRow.description,
			miles_from: serviceRow.miles_from,
			miles_to: serviceRow.miles_to,
			route_from: serviceRow.route_from,
			route_to: serviceRow.route_to,
			// zip_from: serviceRow.zip_from,
			// zip_to: serviceRow.zip_to,
			zone_from: serviceRow.zone_from,
			zone_to: serviceRow.zone_to,
			weight_from: serviceRow.weight_from,
			weight_to: serviceRow.weight_to,
			night_entry: serviceRow.night_entry,
			count_weekends: !!serviceRow.count_weekends,
			count_holidays: !!serviceRow.count_holidays,
			company_id: serviceRow.company_id.id,
			// transit_days: serviceRow.transit_days,
			delivery_zone_from: serviceRow.delivery_zone_from,
			delivery_zone_to: serviceRow.delivery_zone_to,
			pickup_zone_from: serviceRow.pickup_zone_from,
			pickup_zone_to: serviceRow.pickup_zone_to,
			minimum_order_fee: serviceRow.minimum_order_fee
				? serviceRow.minimum_order_fee
				: 0,
			active: !!serviceRow.active,
			service_type_id: serviceRow.service_type_id
				? serviceRow.service_type_id.id
				: "",
			due_time: serviceRow.due_time,
			rate_method_id: serviceRow.rate_method_id,
			rate_type_id: serviceRow.rate_type_id,
			time_past_ready: serviceRow.time_past_ready,
			parent_service_id: serviceRow.id,
			customer_id: null,
			rates: serviceRow.rates,
			ready_time_from: serviceRow.ready_time_from
				? serviceRow.ready_time_from
				: "",
			ready_time_to: serviceRow.ready_time_to ? serviceRow.ready_time_to : "",
			default_availability: serviceRow.default_availability ? "1" : "0",
		};
		return data;
	}

	mapCustomerServiceDataToRequest() {
		const request: any = {
			id: this.id,
			name: this.name,
			code: this.code,
			description: this.description,
			miles_from: this.miles_from,
			miles_to: this.miles_to,
			route_from: this.route_from,
			route_to: this.route_to,
			// zip_from: this.zip_from,
			// zip_to: this.zip_to,
			weight_from: this.weight_from,
			weight_to: this.weight_to,
			available_days: this.available_days,
			// transit_days: this.transit_days,
			night_entry: this.night_entry ? "1" : "0",
			due_time: this.due_time ? utility.formatTime(this.due_time) : "",
			time_past_ready: this.time_past_ready,
			count_weekends: this.count_weekends ? "1" : "0",
			count_holidays: this.count_holidays ? "1" : "0",
			active: this.active ? "1" : "0",
			company_id: this.company_id,
			delivery_zone_from: this.delivery_zone_from,
			delivery_zone_to: this.delivery_zone_to,
			pickup_zone_from: this.pickup_zone_from,
			pickup_zone_to: this.pickup_zone_to,
			rate_method_id: this.rate_method_id,
			rate_type_id: this.rate_type_id,
			ready_time_from: this.ready_time_from
				? utility.formatTime(this.ready_time_from)
				: "",
			ready_time_to: this.ready_time_to
				? utility.formatTime(this.ready_time_to)
				: "",
			default_availability: this.default_availability ? "1" : "0",
			default_due_time: this.default_due_time ? "1" : "0",
			// terminal_id: this.terminal_id,
		};
		return request;
	}
}
export default Service;
