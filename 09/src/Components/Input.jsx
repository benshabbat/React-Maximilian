
export default function Input({name,isTextArea,...props}) {
  return (
    <p>
    <label className="capitalize">{name}</label>
    {isTextArea ? <textarea {...props} /> :<input {...props} /> }
  </p>
  )
}
