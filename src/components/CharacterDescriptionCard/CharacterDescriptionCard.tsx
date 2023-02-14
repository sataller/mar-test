import { CharacterType } from "../../types/types"
import style from './characterDescriptionCard.module.css'
import GoBack from "../GoBack/GoBack"
import Image from "../Image/Image"

export const CharacterDescriptionCard = ({
  character,
}: {
  character: CharacterType,
}) => {

  return (
    <div className={style.characterDescriptionContainer}>
      <GoBack />
      <Image thumbnail={character.thumbnail} />
      <div>
        <p className={style.title}>{character.name}</p>
        <p className={`${style.description} ${style.underlined}`}>Description:</p>
        <p className={style.description}>{character.description || 'Description not found'}</p>
        <p className={`${style.description} ${style.underlined}`}>More info:</p>
        <div>{character.urls.map(url => {
          return (url.url
            && <a target='_blank' rel="noreferrer" href={url.url}>
              <div className={style.comicsName}>
                {url.type}
              </div>
            </a>
          )
        })}</div>
      </div>
    </div>
  )
}

export default CharacterDescriptionCard