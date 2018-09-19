window.app = new Vue({
  el: ".app",
  data: {
    isErr: false,
    isDevicesAv: false,
    devices: ""
  }
});
var ICloud = require("find-apple-device");
const config = require("../settings.conf");

var iCloud = new ICloud(config.icloud, config.password);

iCloud.getDevices(function(err, devices) {
  if (err) {
    return console.error("Error", err);
    window.app.$data.isErr = true;
  } else {
    window.app.$data.isErr = false;
  }
  if (devices.length === 0) {
    return console.log("No devices found!");
    window.app.$data.isDevicesAv = false;
  } else {
    console.log(devices);
    window.app.$data.devices = devices;
    window.app.$data.isDevicesAv = true;
  }
});

document.querySelector("body").style.display = "block";
