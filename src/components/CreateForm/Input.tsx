import style from './createForm.module.css'

const Input = ({
  onChange,
  name,
  id,
}: {
  id: string,
  name: string,
  onChange: (value: string, key: string) => void
}) => {

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  onChange(e.target.value, id)
}

  return (
      <div className={style.inputBlock}>
        <label htmlFor={id}>{name}:</label>
        <input onChange={(e) => handleChange(e)} className={style.styledInput} id={id} type='text'/>  
      </div>
  )
}

export default Input