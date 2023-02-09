import './CreateForm.css'

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
      <div className='inputBlock'>
        <label htmlFor={id}>{name}:</label>
        <input onChange={(e) => handleChange(e)} className='styledInput' id={id} type='text'/>  
      </div>
  )
}

export default Input