import { useHistory } from 'react-router';
import EditIcon from '../../assets/icons/edit.icon';
import style from './header.module.css';

const Header = ({
  searchHandler
}: {
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const history = useHistory()
  const goToCreatePage = () => {
    history.push('/create')
  }

  return (
    <header className={style.appHeader}>
      <input className={style.styledInput} type='text' onChange={searchHandler} placeholder='search by name'/>
      <button className={style.createButton} onClick={goToCreatePage} title='Create new character'>
        <EditIcon/>
      </button>
    </header>
  )
}

export default Header