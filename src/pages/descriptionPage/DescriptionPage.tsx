import CharacterDescriptionCard from "../../components/CharacterDescriptionCard/CharacterDescriptionCard"
import { CharacterType } from "../../types/types"

const DescriptionPage = ({
  character
}: {
  character: CharacterType
}) => {

  return (
    <>
      <div className='contentWrapper'>
        <CharacterDescriptionCard character={character} />
      </div>
    </>
  )
}

export default DescriptionPage