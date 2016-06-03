describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});


describe('JavaScript addition operator', function () {
    it('adds two numbers together for failure case', function () {
        expect(1 + 8).toEqual(9);
    });
});

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });

  it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });

   it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
 

    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return 8 + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).not.toThrow();
  });
});


