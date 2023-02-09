import { CharacterType } from '../../types/types'
import './CharacterCard.css'

export const CharacterCard = ({
  character,
  openDescription,
}: {
  character: CharacterType,
  openDescription: (characterId: number) => void
}) => {

  const onCharacterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    openDescription(character.id)
  }

  return (
    <div className='characterContainer' onClick={(e) => onCharacterClick(e)}>
      <img
        className="charecterImg"
        alt='Charecter_image'
        src={character.thumbnail.extension
          ? `${character.thumbnail.path}.${character.thumbnail.extension}`
          : `${character.thumbnail.path}`}
      />
      <div>
        <p className='title'>{character.name}</p>
      </div>
    </div>
  )
}

export default CharacterCard