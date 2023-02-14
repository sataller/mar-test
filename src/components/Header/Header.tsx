import { useHistory } from 'react-router';
import EditIcon from '../../assets/icons/edit.icon';
import './Header.css';

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
    <header className="App-header">
      <input className='styledInput' type='text' onChange={searchHandler} placeholder='search by name'/>
      <button className='createButton' onClick={goToCreatePage} title='Create new character'>
        <EditIcon/>
      </button>
    </header>
  )
}

export default Header