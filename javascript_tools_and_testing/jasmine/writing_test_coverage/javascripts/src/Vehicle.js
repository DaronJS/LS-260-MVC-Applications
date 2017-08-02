var Vehicle = function(options) {
  this.model = options.model;
  this.make = options.make;
}

Vehicle.prototype = {
  toString: function() {
    return `${this.make} ${this.model}`;
  },
  honkHorn: function() {
    return 'Beep beep!';
  }
}