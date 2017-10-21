const crypto = require('crypto');


function  createHash(data){

    const hash = crypto.createHash('sha512');

    hash.update(data);

    let resume = hash.digest('hex');

    console.log(resume);

    return resume;

}

module.exports = {
    createHash: createHash
}