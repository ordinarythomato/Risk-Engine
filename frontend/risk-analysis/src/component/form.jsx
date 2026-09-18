import { useState } from 'react'
import '../styles/homepage.css'

function Form(){
  const [ form, setForm ] = useState(
    {  
    location: '',
    date: '',
    time: '',
    category: '',
    were_there: ''
    }
  
  )

  const handleChange = ( e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  const Categories = [
  {
    name: 'fatal Injury',
    kabco: 'K',
  },
  {
    name: 'Incapacitating',
    kabco: 'A',
  },
  {
    name: 'Non-Incapacitating',
    kabco: 'B',
  },
  {
    name: 'Possible Injury',
    kabco: 'C',
  },
  {
    name: 'Property Damage Only',
    kabco: 'O',
  }
]

  return(
    <form action="" className="form">
      <h1>Accident Details</h1>
      <label htmlFor="location">
        Location
        <input id="location" type="text" className="fields" name="location" value={form.location} onChange={handleChange} required/>
      </label>

      <label htmlFor="date">
        Date
        <input id="date" type="date" className="fields" name="date" value={form.date} onChange={handleChange}/>        
      </label>

      <label htmlFor="time">
        Time
        <input id="time" type="time" className="fields" name="time" value={form.time} onChange={handleChange}/>
      </label>

      <label htmlFor="category">
        Category
        <select id="category" name="category" className="fields" value={form.category} onChange={handleChange}>
          <option value="" disabled>Select a category</option>
          {Categories.map((category, index) => (
            <option key={index} value={category.name} >{category.name}</option>
          ))}
        </select>
      </label>

      <label htmlFor="">
        Were There?
        <input type="radio" name="were_there" value="Yes" checked={form.were_there === 'Yes'} onChange={handleChange}/>
        <input type="radio" name="were_there" value="No" checked={form.were_there === 'No'} onChange={handleChange}/>
      </label>
    </form>
  )
}

export default Form