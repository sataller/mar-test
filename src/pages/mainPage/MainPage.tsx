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

  const [filtredCharacters, setFiltredCharacters] = useState<CharacterType[]>([])

  useEffect(() => {
    setFiltredCharacters(characters)
  }, [characters])

  const searchHeandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const filtredCharacters = characters?.filter(character => character.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setFiltredCharacters(filtredCharacters)
  }, [characters])

  const openDescription = useCallback((characterId: number) => {
    history.push(`/description/${characterId}`)
  }, [history])

  return (
    <>
      <Header searchHeandler={searchHeandler} />

      <div className='contentWrapper'>
        {filtredCharacters?.map(character => {
          return (
            <CharacterCard key={character.id} character={character} openDescription={openDescription} />
          )
        })}
      </div>
    </>
  )
}

export default MainPage