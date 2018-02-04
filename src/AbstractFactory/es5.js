/**
 * Created by LLGZONE on 2017/10/3.
 */

//a simple example from Learning JavaScript Design Patterns by Addy Osmani
/**
 * define the constructor of Car
 * @param {object} options you can config the car by pass a object which
 * contains doors, stats, color
 * @constructor Car
 */
function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

Car.prototype.drive = function(){
  console.log("car start driving");
};

Car.prototype.breakDown = function(){
  this.state = "breakDown";
};

/**
 * define the constructor of Truck
 * @param {object} options config state, wheelSize and color
 * @constructor Truck
 */
function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue"
}

Truck.prototype.drive = function(){
  console.log("truck start driving");
};

Truck.prototype.breakDown = function(){
  this.state = "breakDown";
};

/**
 * we can register all kinds of vehicle and then get concrete instance.
 * @type {{registerVehicle, getVehicle}}
 */
var AbsVehicleFactory = (function(){
  var types = {};

  return {
    //Vehicle: the constructor of certain type
    registerVehicle: function(type, Vehicle) {
      var proto = Vehicle.prototype;

      //only the class with wanted function can register
      if (proto.drive && proto.breakDown) {
        types[type] = Vehicle;
      }

      return AbsVehicleFactory;
    },
    getVehicle: function(type, config) {
      var Vehicle = types[type];

      return (Vehicle) ? new Vehicle(config) : null;
    }
  }
})();

//how to use
AbsVehicleFactory.registerVehicle("car", Car);
AbsVehicleFactory.registerVehicle("Truck", Truck);

var newWhiteCar = AbsVehicleFactory.getVehicle("car", {
  color: "white",
  state: "new"
});

var oldTruck = AbsVehicleFactory.getVehicle("truck", {
  state: "old"
});