var config = {
	arrowDisplay: 'none',
	fromNumbers: [{alias: 'Not available', number: 'Not available'}],
	askCallTypeWhenMakeCall: false,
	appendToElement: 'wrap-softphone-demo'
};
		
StringeeSoftPhone.on('requestNewToken', function () {
	StringeeSoftPhone.connect(access_token);
});
StringeeSoftPhone.init(config);
StringeeSoftPhone.connect(access_token);
