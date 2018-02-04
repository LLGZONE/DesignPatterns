(function(window) {

  function Observer() {
    this.handlers = {}
  }

  Observer.prototype = {
    constructor: Observer,
    register: function(type, handler) {
      if (typeof this.handlers[type] === 'undefined') {
        this.handlers[type] = [handler]
      } else {
        this.handlers[type].push(handler)
      }
    },
    fire: function(event) {
      if (!event.target) {
        event.target = this
      }

      if (this.handlers[event.type] instanceof Array) {
        var handlers = this.handlers[event.type]

        for (var i = 0; i < handlers.length; i++) {
          handlers[i](event)
        }
      }
    },
    unregister: function(type, handler) {
      if (this.handlers[type] instanceof Array) {
        var handlers = this.handlers[event.type]

        for (var i = 0; i < handlers.length; i++) {
          if (handlers[i] === handler) {
            break
          }
        }

        handlers.splice(i, 1)
      }
    },
    extend: function(obj) {
      function F(){}
      F.prototype = Object.getPrototypeOf(obj)
      var f = new F()
      Object.getOwnPropertyNames(obj).forEach(function(prop) {
        f[prop] = obj[prop]
      })

      for (var key in this) {
        f[key] = this[key]
      }
      return f
    }
  }

  window.Observer = new Observer()
})(window)

function Person(name, age) {
  this.name = name
  this.age = age
}
