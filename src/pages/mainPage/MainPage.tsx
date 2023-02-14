import { useCallback, useEffect, useMemo, useState } from "react"
import { useHistory } from "react-router"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import Header from "../../components/Header/Header"
import { CharacterType } from "../../types/types"
import style from '../../App.module.css'
import useDebounce from "../../hooks/useDebounce"

const MainPage = ({
  characters
}: {
  characters: CharacterType[]
}) => {

  const history = useHistory()
  const [value, setValue] = useState<string>('')
  // const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>([])
  const debouncedValue = useDebounce<string>(value, 500)

  const filteredCharacters = useMemo(() =>{
    return characters?.filter(character => character.name.toLocaleLowerCase().includes(debouncedValue))
  },[debouncedValue, characters])

  // useEffect(() => {
  //   setFilteredCharacters(characters)
  // }, [characters])

  // useEffect(()=>{

  // },[debouncsdValue])

  const searchHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLocaleLowerCase().trim())
  
  }, [])

  const openDescription = useCallback((characterId: number) => {
    history.push(`/description/${characterId}`)
  }, [history])

  return (
    <>
      <Header searchHandler={searchHandler} />

      <div className={style.contentWrapper}>
        {filteredCharacters?.map(character => {
          return (
            <CharacterCard key={character.id} character={character} openDescription={openDescription} />
          )
        })}
      </div>
    </>
  )
}

export default MainPage