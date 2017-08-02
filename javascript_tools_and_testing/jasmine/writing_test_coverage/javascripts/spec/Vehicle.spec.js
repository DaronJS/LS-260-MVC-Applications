describe('the vehicle constructor', function() {
  beforeEach(function() {
    this.vehicle = new Vehicle({make: 'VW', model: 'Passat'});
  });

  it('sets the make and model properties when an object is passed in', function() {
    expect(this.vehicle.make).toEqual('VW');
    expect(this.vehicle.model).toEqual('Passat');
  });

  it('returns a concatenated string with the make and model', function(){
    expect(this.vehicle.toString()).toEqual('VW Passat');

    this.vehicle.make = 'Ford';

    expect(this.vehicle.toString()).toEqual('Ford Passat');
  })

  it('returns a message when the horn is honked', function() {
    expect(this.vehicle.honkHorn()).toMatch(/beep/i)
  })
})