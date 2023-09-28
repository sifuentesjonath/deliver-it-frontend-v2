export class Company {
	code: string = "";

	name: string = "";

	id: any = null;

	type_id: any = null;

	address_name: string = "";

	address_dba: string = "";

	address_one: string = "";

	address_two: string = "";

	address_city: string = "";

	address_state: any = "";

	address_zip: string = "";

	mailing_address_name: string = "";

	mailing_address_dba: string = "";

	mailing_address_one: string = "";

	mailing_address_two: string = "";

	mailing_address_city: string = "";

	mailing_address_state: any = "";

	mailing_address_zip: string = "";

	active: boolean = true;

	primary_email: string = "";

	secondary_email: string = "";

	accounting_email: string = "";

	tax_id: string = "";

	sic_code: string = "";

	timezone: any = null;

	mapToRequest() {
		const request: any = {
			code: this.code,
			name: this.name,
			id: this.id,
			type_id: this.type_id,
			address_name: this.address_name,
			address_dba: this.address_dba,
			address_one: this.address_one,
			address_two: this.address_two,
			address_city: this.address_city,
			address_state: this.address_state,
			address_zip: this.address_zip,
			mailing_address_name: this.mailing_address_name,
			mailing_address_dba: this.mailing_address_dba,
			mailing_address_one: this.mailing_address_one,
			mailing_address_two: this.mailing_address_two,
			mailing_address_city: this.mailing_address_city,
			mailing_address_state: this.mailing_address_state,
			mailing_address_zip: this.mailing_address_zip,
			active: this.active ? "1" : "0",
			primary_email: this.primary_email,
			secondary_email: this.secondary_email,
			accounting_email: this.accounting_email,
			tax_id: this.tax_id,
			sic_code: this.sic_code,
			timezone: this.timezone,
		};
		return request;
	}

	setCompanyData(companyRow: any) {
		const data = {
			code: companyRow.code,
			name: companyRow.name,
			id: companyRow.id,
			type_id: companyRow.type.id,
			address_name: companyRow.address_name,
			address_dba: companyRow.address_dba,
			address_one: companyRow.address_one,
			address_two: companyRow.address_two,
			address_city: companyRow.address_city,
			address_state: companyRow.address_state,
			address_zip: companyRow.address_zip,
			mailing_address_name: companyRow.mailing_address_name,
			mailing_address_dba: companyRow.mailing_address_dba,
			mailing_address_one: companyRow.mailing_address_one,
			mailing_address_two: companyRow.mailing_address_two,
			mailing_address_city: companyRow.mailing_address_city,
			mailing_address_state: companyRow.mailing_address_state,
			mailing_address_zip: companyRow.mailing_address_zip,
			active: companyRow.active,
			primary_email: companyRow.primary_email,
			secondary_email: companyRow.secondary_email,
			accounting_email: companyRow.accounting_email,
			tax_id: companyRow.tax_id,
			sic_code: companyRow.sic_code,
			timezone: companyRow.timezone,
		};
		return data;
	}
}
export default Company;
