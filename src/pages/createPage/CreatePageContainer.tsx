import { addCharacter } from "../../store/charactersSlice"
import { useAppDispatch } from "../../hooks/reduxHooks"
import { FormType } from "../../types/types"
import CreatePage from "./CreatePage"
import { useHistory } from "react-router"

const CreatePageContainer = () => {

  const dispatch = useAppDispatch()
  const history = useHistory()

  const submit = ( form: FormType ) => {
    dispatch(addCharacter({
      id: (new Date()).getTime(),
      name: form.name,
      modified: (new Date()).toDateString(),
      urls: [
        {
          type: 'wiki',
          url: form.wiki,
        },{
          type: 'detail',
          url: form.detail
        },{
          type: 'comiclink',
          url: form.comiclink
        }
      ],
      description: form.description,
      thumbnail: {
        extension: '',
        path: form.iconUrl,
      }
  }))
    history.push('/main')
  }

  return (
    <>
    <CreatePage submit={submit}/>
    </>
  )
}

export default CreatePageContainer