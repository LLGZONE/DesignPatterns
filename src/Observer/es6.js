const list = []

class Subject {
  listen(observer) {
    list.push(observer)
  }

  remove(observer) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === observer) {
        list.splice(i, 1)
        break
      }
    }
  }

  trigger(context) {
    for (let i = 0; i < list.length; i++) {
      list[i].update(context)
    }
  }
}

class Observer {
  update(name) {
    console.log('hello', name)
  }
}

const sub = new Subject()
const obs = new Observer()
sub.listen(obs)
sub.trigger('llg')
sub.remove(obs)
sub.trigger('llg')