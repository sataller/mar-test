import { useCallback, useRef } from 'react'
import { FormType } from '../../types/types'
import GoBack from '../GoBack/GoBack'
import Textarea from './Textarea'
import Input from './Input'
import './CreateForm.css'

type FormRefType = {
  [key: string]: string
}

const CreateForm = ({
  submit
}: {
  submit: (form: FormType) => void
}) => {

  const form = useRef<FormRefType>({
    name: '',
    description: '',
    iconUrl: '',
    detail: '',
    wiki: '',
    comiclink: '',
  })

  const createNewCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    submit(form.current as FormType)
  }

  const onChange = useCallback((value: string, key: string) => {
    form.current[key] = value
  }, [])

  return (
    <form onSubmit={createNewCharacter} className='contentFormWrapper'>
      <GoBack />
      <div>
        <Input name='name' id='name' onChange={onChange} />
        <Textarea name='description' id='description' onChange={onChange} />
        <Input name='image url' id='iconUrl' onChange={onChange} />
        <Input name='detail url' id='detail' onChange={onChange} />
        <Input name='wiki url' id='wiki' onChange={onChange} />
        <Input name='comics url' id='comiclink' onChange={onChange} />
      </div>
      <button className='submitButton' type='submit'>Create</button>
    </form>
  )
}

export default CreateForm