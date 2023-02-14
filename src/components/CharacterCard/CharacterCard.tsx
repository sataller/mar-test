import { CharacterType } from '../../types/types'
import Image from '../Image/Image'
import style from './characterCard.module.css'

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
    <div className={style.characterContainer} onClick={(e) => onCharacterClick(e)}>
      <Image thumbnail={character.thumbnail} />
      <div>
        <p className={style.title}>{character.name}</p>
      </div>
    </div>
  )
}

export default CharacterCard