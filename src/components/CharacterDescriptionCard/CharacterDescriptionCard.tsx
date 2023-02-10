import { CharacterType } from "../../types/types"
import './CharacterDescriptionCard.css'
import GoBack from "../GoBack/GoBack"
import Image from "../Image/Image"

export const CharacterDescriptionCard = ({
  character,
}: {
  character: CharacterType,
}) => {

  return (
    <div className='characterDescriptionContainer'>
      <GoBack />
      <Image thumbnail={character.thumbnail}/>
      <div>
        <p className='title'>{character.name}</p>
        <p className='description underlined'>Description:</p>
        <p className='description'>{character.description || 'Desription not found'}</p>
        <p className='description underlined'>More info:</p>
        <div>{character.urls.map(url => {
          return (url.url
            && <a target='_blank' rel="noreferrer" href={url.url}>
              <div className='comicsName'>
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