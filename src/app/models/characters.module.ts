export interface CharacterModel {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    id: string
    name: string
    type: string
    dimension: string
    residents: {
      id: string
      name: string
      status: string
      species: string
    }
    created: string
  }
  location: {
    id: string
    name: string
    type: string
    dimension: string
  }
  image: string
  episode: {
    id: string
    name: string
  }
  created: string
}
