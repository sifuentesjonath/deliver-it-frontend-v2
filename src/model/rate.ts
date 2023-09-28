export class Rate {
	service_id: any;

	zone_id: any;

	base_rate: any;

	from: any;

	to: any;

	increment: any;

	id: any;

	constructor() {
		this.service_id = null;
		this.zone_id = "";
		this.base_rate = null;
		this.from = null;
		this.to = null;
		this.increment = null;
		this.id = null;
	}

	mapToRequest() {
		const request: any = {
			service_id: this.service_id,
			zone_id: this.zone_id,
			base_rate: this.base_rate,
			from: this.from,
			to: this.to,
			increment: this.increment,
			id: this.id,
		};
		return request;
	}

	setRateData(rateRow: any) {
		const data = {
			service_id: rateRow.service_id.id,
			zone_id: rateRow.zone_id.id,
			base_rate: rateRow.base_rate,
			from: rateRow.from,
			to: rateRow.to,
			increment: rateRow.increment,
			id: rateRow.id,
		};
		return data;
	}
}
export default Rate;
