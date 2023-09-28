export class SalesPerson {
	address_one: string;

	address_two: string;

	address_city: string;

	address_state: any;

	address_zip: string;

	ext: string;

	email: string;

	first_name: string;

	last_name: string;

	password: string;

	passwordConfirm: string;

	id: any;

	role: string;

	commission: any;

	active: any;

	constructor() {
		this.id = "";
		this.address_one = "";
		this.address_two = "";
		this.address_city = "";
		this.address_state = "";
		this.address_zip = "";
		this.ext = "";
		this.email = "";
		this.first_name = "";
		this.last_name = "";
		this.role = "sales";
		this.password = "";
		this.passwordConfirm = "";
		this.commission = null;
		this.active = false;
	}

	mapToRequest() {
		const request: any = {
			id: this.id,
			address_one: this.address_one,
			address_two: this.address_two,
			address_city: this.address_city,
			address_state: this.address_state,
			address_zip: this.address_zip,
			ext: this.ext,
			email: this.email,
			first_name: this.first_name,
			last_name: this.last_name,
			role: this.role,
			commission: this.commission ? Number(this.commission) : Number(0),
			// password: this.password,
			active: this.active ? 1 : 0,
		};
		return request;
	}
}
export default SalesPerson;
