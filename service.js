var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'Outlook calendar app',
    description: 'Runs outlook caldendar app',
    script: 'C:\\WEBTV\\msgraph-training-javascriptspa\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.install();