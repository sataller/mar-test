import { useHistory } from 'react-router';
import { ArrowLeftIcon } from '../../assets/icons/arrowLeft.icon';
import './GoBack.css';

const GoBack = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <button className='goBackButton' onClick={goBack}>
      <ArrowLeftIcon />
    </button>
  )
}

export default GoBack