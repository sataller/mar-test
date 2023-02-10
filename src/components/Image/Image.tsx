import { ThumbnailType } from "../../types/types"

const Image = ({
  thumbnail
}:{
  thumbnail: ThumbnailType
}) => {
  return (
    <img
    className="charecterImg"
    alt='Charecter_image'
    src={thumbnail.extension
      ? `${thumbnail.path}.${thumbnail.extension}`
      : `${thumbnail.path}`}
  />
  )
}

export default Image