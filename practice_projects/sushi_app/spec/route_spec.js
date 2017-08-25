var request = require('request');
var root = "http://localhost:3000/";


describe("JSON Routes", function() {
  describe("get index route", function() {
    var response;
    beforeEach(function(done) {
      request("http://localhost:3000/", function(er, res, body) {
        response = res;
        done();
      });
    });

    it("returns the homepage", function(done) {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch('text/html');
      done();
    });
  });
});