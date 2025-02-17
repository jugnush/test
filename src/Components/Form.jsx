import React, { useState } from 'react'
import {useForm} from 'react-hook-form'



function Form({formData}) {

    const {register, handleSubmit, watch, formState:{errors} }=useForm();
    // const [FormData, setformData] = useState([]);

const submit =(data)=>{
    formData(data);
}




  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="" >Name</label>
                <input type="text" {...register('name',
                  {
                      required: "this field is required",
                  }
                )}/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="" >age</label>
                <input type="number" {...register('age',
                  {
                      required: "this field is required",
                  }
                )}/>
            </div>
            {errors.age && <p>{errors.age.message}</p>}
            <div>
                <input type="submit" />
            </div>
            <div>
            </div>
        </form>
    </div>
  )
}

export default Form