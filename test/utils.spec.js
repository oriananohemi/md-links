const utils = require ('../src/utils');

describe('isFile', () => {
  const directories = 'src';
  it('Debe ser una funcion', () => {
    expect(typeof utils.isFile).toBe('function');
  });
  it('Debe retornarme false si recibe un directorio', () => {
    expect( utils.isFile(directories) ).toBe(false);
  })
})

describe('buildRoute', () => {
  const directories = 'README.md';
  const pathAbsolute = '/home/linix/Documents/Oriana/bog001-md-links/README.md'
  it('Debe ser una funcion', () => {
    expect(typeof utils.buildRoute).toBe('function');
  });
  it('Debe retornar una ruta absoluta', () => {
    expect( utils.buildRoute(directories)).toEqual(pathAbsolute);
  })
})

describe('checkFileType', () => {
  const directories = '/home/linix/Documents/Oriana/bog001-md-links/README.md';
  const extension = '.md'
  it('Debe ser una funcion', () => {
    expect(typeof utils.checkFileType).toBe('function');
  });
  it('Debe retornar true si recibe un archivo con la extension requerida por el proyecto', () => {
    expect( utils.checkFileType(directories, extension)).toBe(true);

  })
})