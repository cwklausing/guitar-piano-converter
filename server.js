const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.set('port', process.env.PORT || 5000);

// Start node server
app.listen(app.get('port'), function() {
	console.log('Node server is running on port ' + app.get('port'));
});
