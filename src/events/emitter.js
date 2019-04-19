export class Emitter {
  constructor () {
    this.events = {}
  }

  on (evts, fn) {
    evts.forEach((evt) => {
      this.events[evt] = this.events[evt] || []
      this.events[evt].push(fn)
    })
  }

  off (evts, fn) {
    evts.forEach((evt) => {
      if (evt in this.events) {
        this.events[evt].splice(this.events[evt].indexOf(fn), 1)
      }
    })
  }

  emit (evt) {
    if (evt in this.events) {
      for (let i = 0; i < this.events[evt].length; i++) {
        this.events[evt][i].apply(this, [].slice.call(arguments, 1))
      }
    }
  }
}