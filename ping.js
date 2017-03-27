/**
 * A command that can check if the bot is alive.
 *
 * Written By:
 *              Matthew Knox
 *
 * License:
 *              MIT License. All code unless otherwise specified is
 *              Copyright (c) Matthew Knox and Contributors 2017.
 */

const os = require('os');

exports.run = (api, event) => {
    const pi = exports.platform.packageInfo;
    api.sendMessage(`${pi.name} ${pi.version} @ ${os.hostname()} (${os.type()} ${os.arch()})`, event.thread_id);
};
