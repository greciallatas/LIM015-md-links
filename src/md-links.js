const API = require('../src/index.js');
const chalk = require('chalk');
const {noLinks, noExist} = require('../src/stats.js');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
    const pathAbsolute = API.convertAbsolutePath(path);

    if (API.existPath(pathAbsolute)) {
        const searchLinks = API.searchAllMDLinks(path);

        if (searchLinks.length === 0) {
            reject(noLinks);
        } else {
            if (options.validate === true) {
                const getMDLinks = API.statusAllMDLinks(searchLinks);
                resolve(Promise.all(getMDLinks));
            }else{
                resolve(searchLinks);
            }
        }
    } else {
        reject(noExist);
    }
});

module.exports = { mdLinks };
