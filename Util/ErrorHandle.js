function logAndSend(res, err, endpoint) {
	let message = "Bad Request sent for endpoint: " + endpoint;
	let error = 
		{
			message: message,
			err: err
		};
	res.set(400).send(error); 
}

module.exports = logAndSend;
