import style from './createForm.module.css'

const Textarea = ({
  onChange,
  name,
  id,
}: {
  id: string,
  name: string,
  onChange: (value: string, key: string) => void
}) => {

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
  onChange(e.target.value, id)
}

  return (
      <div className={style.inputBlock}>
        <label htmlFor={id}>{name}:</label>
        <textarea onChange={(e) => handleChange(e)} className={style.styledTextarea} id={id} />  
      </div>
  )
}

export default Textarea