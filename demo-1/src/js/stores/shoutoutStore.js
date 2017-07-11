import { EventEmitter } from "events"
import dispatcher from "../dispatcher"

class ShoutoutStore extends EventEmitter {

  constructor () {
    super()
    this.shoutouts = [
      {id: 1, shoutout: "First Shout Out", name: "First"},
      {id: 2, shoutout: "Second Shout Out", name: "Second"}
    ]
  }

  actionListener (action) {
    switch (action.type) {
      case "CREATE_SHOUTOUT": {
        this.createShoutout(
          action.shoutout,
          action.name
        )
      }
    }
  }

  createShoutout (shoutout, name) {
    const id = Date.now().toString()
    let newSO = {}
    newSO.id = id
    newSO.shoutout = shoutout
    newSO.name = name
    this.shoutouts.push(newSO)
    this.emit("newShoutout")
  }

  getShoutouts () {
    return this.shoutouts
  }
}

const shoutoutStore = new ShoutoutStore()
dispatcher.register(shoutoutStore.actionListener.bind(shoutoutStore))
export default shoutoutStore