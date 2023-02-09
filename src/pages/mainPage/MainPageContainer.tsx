import { useAppSelector } from "../../hooks/reduxHooks"
import MainPage from "./MainPage"

const MainPageContainer = () => {
  const characters = useAppSelector( state => state.charactersState.characters)
  return(
    <>
      <MainPage characters={characters}/>
    </>
  )
}

export default MainPageContainer