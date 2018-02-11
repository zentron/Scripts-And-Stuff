exports.handler = (event, context, callback) => {
    
// TODO implement
    console.log("HH");
	
	callback(null, {
		"customParam": process.env.CustomParameter,
		"environment": process.env.Environment,
		"Release": process.env.Release,
		"Color": "red"
	});

};