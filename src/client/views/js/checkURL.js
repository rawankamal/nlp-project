const validUrl = require('valid-url');

const validateUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    validateUrl,
};