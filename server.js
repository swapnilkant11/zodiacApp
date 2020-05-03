// This is used to call the express framework for our backend work. */
const express = require('express');

// This is used to run the server for our backend work.
const app = express();

// This is used to import static files to the project and to display the content of "client" file here.
app.use(express.static(__dirname + '/client'));

// Port address to find the device.
const port = process.env.PORT || 3000;

// Function which displays the message that the server has started.
app.listen(port, function(){
    console.log('Server running on nodemon successfully on port ' + port);
});
