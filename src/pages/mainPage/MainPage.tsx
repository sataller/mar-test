import { useCallback, useEffect, useState } from "react"
import { useHistory } from "react-router"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import Header from "../../components/Header/Header"
import { CharacterType } from "../../types/types"

const MainPage = ({
  characters
}: {
  characters: CharacterType[]
}) => {

  const history = useHistory()
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>([])

  useEffect(() => {
    setFilteredCharacters(characters)
  }, [characters])

  const searchHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCharacters = characters?.filter(character => character.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setFilteredCharacters(filteredCharacters)
  }, [characters])

  const openDescription = useCallback((characterId: number) => {
    history.push(`/description/${characterId}`)
  }, [history])

  return (
    <>
      <Header searchHandler={searchHandler} />

      <div className='contentWrapper'>
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