import { useEffect } from 'react';
import './App.css';
import { getCharacters } from './fetch/getCharacters';
import { useAppDispatch } from './hooks/reduxHooks';
import Routes from './router';
import { setCharacters } from './store/charactersSlice';
import { CharacterType } from './types/types';
import { CHARACTERS_KEY, getLocalStorage, setLocalStorage } from './utils/localeStorage';

function App() {

  const dispatch = useAppDispatch()

  const getCharactersList = async () => {
    const data = await getCharacters()
    dispatch(setCharacters(data))
    setLocalStorage(CHARACTERS_KEY, data)
  }

  useEffect(() => {
    const characters = getLocalStorage(CHARACTERS_KEY)
    if (characters){
      const parsedCharacters: CharacterType[] = JSON.parse(characters)
      dispatch(setCharacters(parsedCharacters))
    } else {
      getCharactersList()
    }
  }, [])

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
