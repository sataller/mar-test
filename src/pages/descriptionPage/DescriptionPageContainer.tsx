import { useMemo } from "react"
import { useParams } from "react-router"
import { useAppSelector } from "../../hooks/reduxHooks"
import DescriptionPage from "./DescriptionPage"

const DescriptionPageContainer = () => {
  const params: {id: string} = useParams()
  const characters = useAppSelector( state => state.charactersState.characters)
  
  const currentCharacter = useMemo(()=>{
    return characters.find(character => character.id === +params.id)
  }, [characters, params.id])

  return(
    <>
    {currentCharacter 
      ? <DescriptionPage character={currentCharacter}/>
      : <div className="contentWrapper">
          Character not found
        </div>
   }
    </>
  )
}

export default DescriptionPageContainer