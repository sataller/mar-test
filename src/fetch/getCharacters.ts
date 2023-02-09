import { CharacterType } from "../types/types"

export const getCharecters = async ():Promise<CharacterType[]> =>{
  const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=999&apikey=b517ac3c3484936b999e8deb4ea9e21a&hash=6a902ea48eb10a6b73f44a0823b0b4b5&limit=100`)
  const data = await response.json()
  return data.data.results
}
