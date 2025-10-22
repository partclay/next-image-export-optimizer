"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createHash } = require("crypto");
module.exports = function getHash(items) {
    const hash = createHash("sha256");
    for (let item of items) {
        if (typeof item === "number")
            hash.update(String(item));
        else {
            hash.update(item);
        }
    }
    // See https://en.wikipedia.org/wiki/Base64#Filenames
    return hash.digest("base64").replace(/\//g, "-");
};
