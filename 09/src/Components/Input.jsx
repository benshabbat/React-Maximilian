
export default function Input({name,type="text",isTextArea=false}) {
  return (
    <p>
    <label>{name}</label>
    {isTextArea ? <textarea name={name} /> :<input type={type} name={name} /> }
  </p>
  )
}
