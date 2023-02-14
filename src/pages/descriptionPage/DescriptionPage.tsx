import CharacterDescriptionCard from "../../components/CharacterDescriptionCard/CharacterDescriptionCard"
import { CharacterType } from "../../types/types"
import style from '../../App.module.css'

const DescriptionPage = ({
  character
}: {
  character: CharacterType
}) => {

  return (
    <>
      <div className={style.contentWrapper}>
        <CharacterDescriptionCard character={character} />
      </div>
    </>
  )
}

export default DescriptionPage