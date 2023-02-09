import CreateForm from "../../components/CreateForm/CreateForm"
import { FormType } from "../../types/types"

const CreatePage = ({
  submit
}: {
  submit: ( form: FormType ) => void
}) => {

  return (
    <div className="contentWrapper">
     <CreateForm submit={submit} />
    </div>
  )
}

export default CreatePage