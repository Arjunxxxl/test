var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 2000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});