import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [hairColor, setHairColor] = useState('')

  return (
    <form>
    <input type="text" name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
    <input type="number" name='age' placeholder='Age' value={age} onChange={e => setAge(Number(e.target.value))}/>
    <input type="text" name='hairColor' placeholder='Hair color' value={hairColor} onChange={e => setHairColor(e.target.value)}/>
    <button>Submit</button>
</form>
  )
}

export default ControlledForm