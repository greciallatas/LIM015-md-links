const {mdLinks} = require('../src/md-links.js');
const stats = require('../src/stats.js');

const path = 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD';
const validateTrue= [{
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
const validateFalse = [{
                    href: 'https://www.geeksforgeeks.org/file-isfile-method-in-java-with-examples/',
                    text: 'isFile()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                },
                {
                    href: 'https://www.geeksforgeeks.org/file-isdirectory-method-in-java-with-examples/',
                    text: 'isDirectory()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                },
                {
                    href: 'https://www.geeksforgeeks.org/file-isdirectory-method-in-java-with-examples/',
                    text: 'isDirectory()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                },
                {
                    href: 'https://github.com/greciallatas/LIM015-mdlinks/blob/main/markDown/codepen.io/trending',
                    text: 'GitHub',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                }];
const notLinks = 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba2\\prueba2.md';
const pathFail = 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\prubaMD';

describe('md-links', () => {
    it('is a function', () => {
        expect(typeof mdLinks).toBe('function');
    });

    it('should return href, text, file, status and ok', () => {
        return expect(mdLinks(path, {validate: true})).resolves.toEqual(validateTrue);
    });

    it('should return href, text and file', () => {
        return expect(mdLinks(path, {validate: false})).resolves.toEqual(validateFalse);
    });

    it('should return error message: No links found', () => {
        return expect(mdLinks(notLinks, {validate:false})).rejects.toBe(stats.noLinks);
    });

    it("should return error message: The path doesn't exist", () => {
        return expect(mdLinks(pathFail, {validate:false})).rejects.toBe(stats.noExist);
    });
});