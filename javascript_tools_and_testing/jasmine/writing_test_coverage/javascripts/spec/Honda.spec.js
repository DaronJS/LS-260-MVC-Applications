describe('the honda constructor', function() {
  beforeEach(function() {
    this.honda = new Honda('Accord');
  });

  it('inherits from the vehicle prototype', function() {
    expect(this.honda.toString()).toEqual('Honda Accord');
  });

  it('throws an error if an invalid model is passed in', function() {
    function createInvalidHonda() { return new Honda('Passat') };

    expect(createInvalidHonda).toThrowError('Model Passat does not exist')
  });

  it('returns a list of valid models', function() {
    expect(Honda.getModels().length).toBeDefined();
    expect(Honda.getModels()).toContain("Crosstour");
  });

  it('calls getPrice when a new car is created', function() {
    spyOn(Honda, 'getPrice');
    var accord = new Honda('Accord');
    expect(Honda.getPrice).toHaveBeenCalledWith("Accord");
  });

  it('returns a price for the passed in model', function() {
    expect(this.honda.price).toBeGreaterThan(0);
  });

  it('returns a price less than 15000 when a civic is created', function() {
    var civic = new Honda('Civic');
    expect(civic.price).toBeLessThan(15000);
  });

  it('returns a price greater than 10000 wheb a CR-Z is created', function() {
    var crz = new Honda('CR-Z');
    expect(crz.price).toBeGreaterThan(10000);
  })
})