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
    const pi = exports.platform.packageInfo,
        name = pi.name,
        vers = pi.version,
        host = os.hostname(),
        plat = os.type(),
        arch = os.arch(),
        node = process.release.name,
        nver = process.version;
    api.sendMessage(`${name} ${vers} @ ${host} (${plat} ${arch}, ${node} ${nver})`, event.thread_id);
};
