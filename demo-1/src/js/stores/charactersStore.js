import { EventEmitter } from 'events'

class CharactersStore extends EventEmitter {
  constructor () {
    super()
    this.characters = [
      {
        name: "Jango Fett",
        height: "183",
        mass: "89",
        hair: "black",
        skin: "tan",
        eye: "brown",
        birthYear: "66BBY",
        gender: "male"
      },
      {
        name: "R2D2",
        height: "100",
        mass: "500",
        hair: "none",
        skin: "silver",
        eye: "black",
        birthYear: "55BBY",
        gender: "male"
      }
    ]
  }

  getCharacters () {
    return this.characters
  }
}

const charactersStore = new CharactersStore()
export default charactersStore