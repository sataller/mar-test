import { ThumbnailType } from "../../types/types"
import style from './image.module.css'

const Image = ({
  thumbnail
}:{
  thumbnail: ThumbnailType
}) => {
  return (
    <img
    className={style.characterImg}
    alt='Character_image'
    src={thumbnail.extension
      ? `${thumbnail.path}.${thumbnail.extension}`
      : `${thumbnail.path}`}
  />
  )
}

export default Image