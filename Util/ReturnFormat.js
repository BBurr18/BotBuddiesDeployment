class ReturnFormat {
	constructor(req) {
		this.request_details = JSON.parse(req.body.payload);
		this.who = this.request_details.sender;
	}

	log_request() {
		console.log("--- New git event for webhook: " + this.request_details.hook_id);
		console.log("\tEvent: " + this.request_details.hook.events[0]);
		console.log("\tUser: " + this.who.login + "\tID: " + this.who.id);
		console.log("\tAccount: " + this.who.url);
		console.log("\tTimestamp: " + this.request_details.hook.created_at);
		console.log("END WEBHOOK: " + this.request_details.hook_id);
	}

	format() {
		this.log_request();
		let return_data = {
			status: "Success",
			who: this.who
		};
		return return_data;
	}
}

module.exports = ReturnFormat;
