import { useHistory } from 'react-router';
import { ArrowLeftIcon } from '../../assets/icons/arrowLeft.icon';
import style from './goBack.module.css';

const GoBack = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <button className={style.goBackButton} onClick={goBack}>
      <ArrowLeftIcon />
    </button>
  )
}

export default GoBack