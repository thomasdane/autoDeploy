var express = require('express'),  
    http = require('http'),
    app = express();

app.set('port', process.env.PORT || 8080);

app.post('/backup/', function (req, res) {  
    var spawn = require('child_process').spawn,
    deploy = spawn('sh', [ './backup.sh' ]);

    deploy.stdout.on('data', function (data) {
        console.log(''+data);
    });

    deploy.on('close', function (code) {
        console.log('Child process exited with code ' + code);
    });
    res.json(200, {message: 'Commit received'})
});

http.createServer(app).listen(app.get('port'), function(){  
  console.log('Express server listening on port ' + app.get('port'));
});