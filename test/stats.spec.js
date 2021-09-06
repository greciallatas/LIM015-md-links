const stats = require('../src/stats.js');

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
        expect(typeof stats.statsLinks).toBe('function');
    });

    it('should return total number of links and unique links', () => {
        let result = `Total: 4
        Unique: 3`;
        expect(stats.statsLinks(links)).toBe(result);
    });
});

describe('Broken Links', () => {
    it('is a function', () => {
        expect(typeof stats.brokenLinks).toBe('function');
    });

    it('should return broken number of links', () => {
        let result = 'Broken: 1';
        expect(stats.brokenLinks(links)).toBe(result);
    });
});
