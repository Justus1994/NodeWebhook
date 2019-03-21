const http = require('http');
const exec = require('child_process').exec;
require('dotenv').config();


const secret = 'mytestsecret'; // secret key of the webhook
const port = 8081; // port

http.createServer(function(req, res) {
      console.log("request received");

      req.on('data', function(chunk) {

          if (process.env.MY_SECRET === req.headers['x-gitlab-token']) {
            console.log("running hook.sh");
            var deploySh = exec('sh hook.sh',
              (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                  console.log(`exec error: ${error}`);
                }
              });
          }
        });
        res.end();

      }).listen(port);

    console.log("Server listening at " + port);
