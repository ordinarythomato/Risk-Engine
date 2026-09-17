import '../styles/homepage.css'

function Form(){
  return(
    <form action="" className='form'>
      <label htmlFor="">
        Location
        <input type="text" className="fields"/>
      </label>

      <label htmlFor="">
        Date
        <input type="date" className="fields"/>        
      </label>

      <label htmlFor="">
        Time
        <input type="time" className="fields"/>
      </label>

      <label htmlFor="">
        Category
        <select name="" id="" className="fields"></select>
      </label>

      <label htmlFor="">
        Were There?
        <input type="radio" name="were_there" value="Yes"/>
        <input type="radio" name="were_there" value="No"/>
      </label>
    </form>
  )
}

export default Form