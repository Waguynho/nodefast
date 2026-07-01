const crypto = require('crypto');

function createHash(data) {
    const normalizedData = data == null ? '' : String(data);
    const hash = crypto.createHash('sha512');

    hash.update(normalizedData);

    const resume = hash.digest('hex');

    console.log(resume);

    return resume;
}

module.exports = {
    createHash: createHash
}