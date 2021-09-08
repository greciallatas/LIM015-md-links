const {statsLinks, brokenLinks} = require('../src/stats.js');
const chalk = require('chalk');

const links = [{
                    href: 'https://www.geeksforgeeks.org/file-isfile-method-in-java-with-examples/',
                    text: 'isFile()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                    status: 200,
                    ok: true
                },
                {
                    href: 'https://www.geeksforgeeks.org/file-isdirectory-method-in-java-with-examples/',
                    text: 'isDirectory()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                    status: 200,
                    ok: true
                },
                {
                    href: 'https://www.geeksforgeeks.org/file-isdirectory-method-in-java-with-examples/',
                    text: 'isDirectory()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                    status: 200,
                    ok: true
                },
                {
                    href: 'https://github.com/greciallatas/LIM015-mdlinks/blob/main/markDown/codepen.io/trending',
                    text: 'GitHub',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                    status: 404,
                    ok: false
                }];

describe('Stats Links', () => {
    it('is a function', () => {
        expect(typeof statsLinks).toBe('function');
    });

    it('should return total number of links and unique links', () => {
        let result = chalk.green(`Total: 4`) +'\n'+ chalk.yellow(`Unique: 3`);
        expect(statsLinks(links)).toBe(result);
    });
});

describe('Broken Links', () => {
    it('is a function', () => {
        expect(typeof brokenLinks).toBe('function');
    });

    it('should return broken number of links', () => {
        let result = chalk.red('Broken: 1');
        expect(brokenLinks(links)).toBe(result);
    });
});
