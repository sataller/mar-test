import { useHistory } from 'react-router';
import EditIcon from '../../assets/edite.icon';
import './Header.css';

const Header = ({
  searchHeandler
}: {
  searchHeandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const history = useHistory()
  const goToCreatePage = () => {
    history.push('/create')
  }

  return (
    <header className="App-header">
      <input className='styledInput' type='text' onChange={searchHeandler} placeholder='search by name'/>
      <button className='createButton' onClick={goToCreatePage} title='Create new character'>
        <EditIcon/>
      </button>
    </header>
  )
}

export default Header