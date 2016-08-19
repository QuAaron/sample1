var app = angular.module('app', []);

var myControllers = {};

var TemperatureMonitor = {

  temparatures: [],

  getTemparatures: function() {
    return this.temparatures;
  },

  deleteArray: function() {
    this.temparatures.splice(0, this.temparatures.length);
  },

  recordTemperature: function(temp) {
    this.temparatures.push(temp);
  },

  getCurrentMedian: function() {
    if (this.temparatures.length === 0) {
      return 0;
    } else {
      var len = this.temparatures.length;
      this.temparatures.sort();
      if (isEven(len)) {
        return (Number(this.temparatures[len / 2]) + Number(this.temparatures[(len / 2) - 1])) / 2;
      } else {
        return this.temparatures[(len / 2) - 0.5];
      }
    }
    //console.log(this.temparatures);
  }
};

myControllers.controller1 = function($scope) //anonymous function
  {
    $scope.temparature = "";
    //console.log("inside controller1")
    //console.log($scope.temparature);

    $scope.recordTemperature = function() {
      //console.log("inside funciton record temparature");

      if (validateNumber()) {
        //console.log("true");
        TemperatureMonitor.recordTemperature($scope.temparature);
        document.getElementById("errorMessage").innerHTML= "";
      } else {
        //console.log("false");
        document.getElementById("errorMessage").innerHTML = 'input not invalid';
      }

    }
    
    $scope.getCurrentMedian = function() {
      document.getElementById("currentMedian").innerHTML = TemperatureMonitor.getCurrentMedian();
      //console.log(TemperatureMonitor.getCurrentMedian());
    }
  };


app.controller(myControllers);

function validateNumber() {
  var temp;
  temp = document.getElementById("temparature").value;
  if (isNaN(temp)) {
    return false;
  } else {
        return true;
  }
}

function isEven(n) {
  return n % 2 === 0;
}