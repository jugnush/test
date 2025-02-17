import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'

function App() {
  const [formDataVar, setFormDataVar] = useState([]);

  const formData=(data)=>{
    console.log('parentww', formDataVar)
    setFormDataVar((prev)=>[...prev, data])
    console.log('parent', formDataVar)
  }
  return (
    <>
      <Form formData = {formData}/>
      <div className='container'>
    
      {formDataVar.map((item, index) => (
          <div key={index} className=''>
            <span>{item.name} </span>
            <span> {item.age}</span>
          </div>
          
        ))}
    </div>

    </>
  )
}

export default App
