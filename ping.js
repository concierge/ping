/**
    * A command that can check if the bot is alive.
    *
    * Written By:
    *              Matthew Knox
    *
    * License:
    *              MIT License. All code unless otherwise specified is
    *              Copyright (c) Matthew Knox and Contributors 2015.
    */

var os = require('os');

exports.run = function(api, event) {
    api.sendMessage(this.packageInfo.name + ' ' + this.packageInfo.version + ' @ ' + os.hostname() +
    ' (' + os.type() + ' ' + os.arch() + ')', event.thread_id);
    return false;
};
