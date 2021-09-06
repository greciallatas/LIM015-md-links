const index = require('../src/index.js');

const path = './markDown';

describe('Exist Path', () => {
    it('is a function', () => {
        expect(typeof index.existPath).toBe('function');
    });

    it('should return true if the path exist', () => {
        expect(index.existPath(path)).toBe(true);
    });

    it('should return false if the path isn`t exist', () => {
        let path = index.existPath('./markDown');
        expect(index.existPath(path)).toBe(false);
    });
});

describe('convert to absolute path', () => {
    it('is a function', () => {
        expect(typeof index.convertAbsolutePath).toBe('function');
    });

    it('should return the content if a file', () => {
        expect(index.convertAbsolutePath(path))
        .toBe('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown');
    });
});

describe('read File', () => {
    it('is a function', () => {
        expect(typeof index.readFile).toBe('function');
    });

    it('should return  to path absolute', () => {
        let path = index.readFile('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\hola.txt');
        let result = 'Archivo de prueba';
        expect(path).toBe(result);
    });
});

describe('Directory', () => {
    it('is a function', () => {
        expect(typeof index.directory).toBe('function');
    });

    it('should return true if the path is directory', () => {
        expect(index.directory(path)).toBe(true);
    });

    it('should return false if the path isn`t directory', () => {
        let path = index.directory('./README.md');
        expect(path).toBe(false);
    });
});

describe('Read directory', () => {
    it('is a function', () => {
        expect(typeof index.readDirectory).toBe('function');
    });

    it('should return files of directory', () => {
        let result = ["hola.txt", "path.md", "pruebaMD"];
        expect(index.readDirectory(path)).toEqual(result);
    });
});

describe('Get all  files Markdown', () => {
    it('is a function', () => {
        expect(typeof index.getAllMDFiles).toBe('function');
    });

    it('should return files markdown of directory', () => {
        let result = [
                        'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\path.md',
                        'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                        'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba2\\prueba2.md'
                    ];
        expect(index.getAllMDFiles(path)).toEqual(result);
    });
});

describe('Search all MD Links', () => {
    it('is a function', () => {
        expect(typeof index.searchAllMDLinks).toBe('function');
    });

    it('should return href, text, file of file markdown', () => {
        let path = index.searchAllMDLinks('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD');
        let result = [
                    {
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
                    }
                    ];
        expect(path).toStrictEqual(result);
    })
})