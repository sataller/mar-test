import { ThumbnailType } from "../../types/types"

const Image = ({
  thumbnail
}:{
  thumbnail: ThumbnailType
}) => {
  return (
    <img
    className="characterImg"
    alt='Character_image'
    src={thumbnail.extension
      ? `${thumbnail.path}.${thumbnail.extension}`
      : `${thumbnail.path}`}
  />
  )
}

export default Image