
describe('controller1', function() {
  beforeEach(module('app'));


  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Tests for Median', function() {
    it('check median for empty array', function() {
      var $scope = {};
      var controller = $controller('controller1', { $scope: $scope });
      

      expect(TemperatureMonitor.getCurrentMedian()).toEqual(0);
    });

    it('check median for odd elements', function() {
      var $scope = {};
      var controller = $controller('controller1', { $scope: $scope });
      
      TemperatureMonitor.recordTemperature(1);
      TemperatureMonitor.recordTemperature(2);
      TemperatureMonitor.recordTemperature(3);

      expect(TemperatureMonitor.getCurrentMedian()).toEqual(TemperatureMonitor.getTemparatures()[(TemperatureMonitor.getTemparatures().length/2) - 0.5]);
    });
  });

   it('check median for even elements', function() {
      var $scope = {};
      var controller = $controller('controller1', { $scope: $scope });
      
      TemperatureMonitor.deleteArray();

      TemperatureMonitor.recordTemperature(1);
      TemperatureMonitor.recordTemperature(1);

      
      var arrays = TemperatureMonitor.getTemparatures();
      var length = arrays.length;

      console.log(arrays);
      console.log(TemperatureMonitor.getCurrentMedian());

      expect(TemperatureMonitor.getCurrentMedian()).toEqual((Number(arrays[length/2]) + Number(arrays[length/2 -1]) )/2);
    });

});