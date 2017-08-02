

function Honda(model) {
  const available = this.verify(model);
  if(!available) { throw new Error(`Model ${model} does not exist`); }
  this.make = 'Honda';
  this.model = model;
  this.price = Honda.getPrice(this.model);
}

(function() {
  const prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];
  const models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
  Honda.prototype = Object.create(Vehicle.prototype);
  Honda.prototype.constructor = Honda;

  Honda.getModels = function() { return models.slice() };

  Honda.getPrice = function(model) {
    return prices[models.indexOf(model)];
  }

  Honda.prototype.verify = function(model) {
    return models.indexOf(model) !== -1
  }
})()

