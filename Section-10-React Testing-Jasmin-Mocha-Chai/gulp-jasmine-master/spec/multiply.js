var multiply = require('../src/multiply');

describe('multiply', function(){
  it('Multiplies two numbers', function(){
    expect(multiply(2,3)).toEqual(6);
  });
});
