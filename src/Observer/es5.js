var subject = function() {
  var id = 0

  function Subject() {
    this.list = []
  }

  Subject.prototype = {
    constructor: Subject,
    listen: function(observer) {
      this.list.push(observer)
    },
    remove: function(observer) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] === observer) {
          this.list.splice(i, 1)
          break
        }
      }
    },
    trigger: function(context) {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].update(context)
      }
    },
  }

  return new Subject()
}()

function Observer() {}

Observer.prototype.update = function(name) {
  console.log('hello', name)
}

var o1 = new Observer()
subject.listen(o1)
subject.trigger('llg') // 'llg'
subject.remove(o1)
subject.trigger('llg') // nothing