import { CharacterType } from "../types/types"

export const CHARACTERS_KEY = 'CHARACTERS_KEY'


export const getLocalStorage = (key: string) => {
  if (typeof localStorage !== undefined) {
    return localStorage && localStorage.getItem(key)
  }
}

export const setLocalStorage = (key: string, value: CharacterType[]) => {
  return localStorage && localStorage.setItem(key, JSON.stringify(value))
}
