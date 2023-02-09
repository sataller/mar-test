import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CharacterType } from '../types/types'
import { CHARACTERS_KEY, setLocalStorage } from '../utils/localeStorage'

export interface CharactersState {
  characters: CharacterType[]
}

const initialState: CharactersState = {
  characters: []
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<CharacterType[]>) => {
      state.characters = action.payload
    },
    addCharacter: (state, action: PayloadAction<CharacterType>) => {
      const newCharacters = [action.payload, ...state.characters]
      state.characters = newCharacters
      setLocalStorage(CHARACTERS_KEY, newCharacters)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCharacters, addCharacter } = charactersSlice.actions

export default charactersSlice.reducer