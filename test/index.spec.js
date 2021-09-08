const index = require('../src/index.js');

const path = './markDown';
const pathFail = './markDon';
const links = [{
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

describe('Exist Path', () => {
    it('is a function', () => {
        expect(typeof index.existPath).toBe('function');
    });

    it('should return true if the path exist', () => {
        expect(index.existPath(path)).toBe(true);
    });

    it('should return false if the path isn`t exist', () => {
        expect(index.existPath(pathFail)).toBe(false);
    });
});

describe('Convert to absolute path', () => {
    it('is a function', () => {
        expect(typeof index.convertAbsolutePath).toBe('function');
    });

    it('should return to path absolute', () => {
        expect(index.convertAbsolutePath(path))
        .toBe('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown');
    });
});

describe('Read File', () => {
    it('is a function', () => {
        expect(typeof index.readFile).toBe('function');
    });

    it('should return the content if a file', () => {
        const file = index.readFile('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\hola.txt');
        expect(file).toBe('Archivo de prueba');
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
        expect(index.directory('./README.md')).toBe(false);
    });
});

describe('Read directory', () => {
    it('is a function', () => {
        expect(typeof index.readDirectory).toBe('function');
    });

    it('should return files of directory', () => {
        const contentDirectory = ["hola.txt", "path.md", "pruebaMD"];
        expect(index.readDirectory(path)).toEqual(contentDirectory);
    });
});

describe('Get all  files Markdown', () => {
    it('is a function', () => {
        expect(typeof index.getAllMDFiles).toBe('function');
    });

    it('should return files markdown of directory', () => {
        const allFiles = [
                        'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\path.md',
                        'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                        'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba2\\prueba2.md'
                    ];
        expect(index.getAllMDFiles(path)).toEqual(allFiles);
    });
});

describe('Search all MD Links', () => {
    it('is a function', () => {
        expect(typeof index.searchAllMDLinks).toBe('function');
    });

    it('should return href, text, file of file markdown', () => {
        const pathAbs = index.searchAllMDLinks('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD');
        expect(pathAbs).toStrictEqual(links);
    })
});

describe('Status all links of files markdown', () => {
    it('is a function', () => {
        expect(typeof index.statusAllMDLinks).toBe('function');
    });
});