exports.handler = (event, context, callback) => {
    
// TODO implement
    console.log("HHK");
	
	callback(null, {
		"customParam": process.env.CustomParameter,
		"environment": process.env.Environment,
		"Release": process.env.Release,
		"Color": "Orange"
	});

};