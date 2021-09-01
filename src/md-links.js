const API = require('../src/index.js');
const chalk = require('chalk');
const {noLinks, noExist} = require('../src/stats.js');

const mdLinks = (path, options) => new Promise((resolve, reject) => {

    if (API.existPath(path)) {
        const searchLinks = API.searchAllMDLinks(path);

        if (options.validate === true) {
            const getMDLinks = API.statusAllMDLinks(searchLinks);
            resolve(Promise.all(getMDLinks));
        }else{
            resolve(searchLinks);
        }
    } else {
        reject(noExist);
    }
});

// const prueba1 = 'markDown\\path.md';
// console.log(mdLinks(prueba1, true).then((response) => console.log(response)));

// const prueba2 = 'markDown\\pruebaMD';
// console.log(mdLinks(prueba2, false).then((response) => console.log(response)));

module.exports = { mdLinks };
