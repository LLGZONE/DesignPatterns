let cObserver = null

{
  const handlers = {}
  let uid = 0

  class Observer {
    addListener(type, fn) {
      if (!handlers[type]) {
        handlers[type] = []
      }

      const id = uid++
      handlers[type].push({id, func: fn})

      return id
    }

    fire(type, ...args) {
      if (handlers[type] && handlers[type] instanceof Array) {
        let len = handlers[type].length

        while (len--) {
          handlers[type][len].func(...args)
        }
      }
    }

    removeListener(id) {
      for (let key in handlers) {
        if (handlers[key]) {
          for (let i = 0; i < handlers[key].length; i++) {
            if (handlers[key][i].id === id) {
              handlers[key].splice(i, 1)
              break
            }
          }
        }
      }
    }
  }

  cObserver = new Observer()
}

const id = cObserver.addListener('message', (...args) => {
  console.log(args.join(','))
})

console.log(typeof Observer === 'undefined') // true

cObserver.fire('message', 'hello', 'world')

cObserver.removeListener(id)

cObserver.fire('message', 'hello', 'world')