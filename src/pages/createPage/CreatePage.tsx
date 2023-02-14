import CreateForm from "../../components/CreateForm/CreateForm"
import { FormType } from "../../types/types"
import style from '../../App.module.css'

const CreatePage = ({
  submit
}: {
  submit: ( form: FormType ) => void
}) => {

  return (
    <div className={style.contentWrapper}>
     <CreateForm submit={submit} />
    </div>
  )
}

export default CreatePage