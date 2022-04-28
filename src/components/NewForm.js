import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function NewForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      
      fetch('http://localhost:3000/api/v1/uploads', {
          method: 'POST',
          body: {
            'upload': {
                'title': data.title,
                'picture': data.picture[0]
            }
          },
          headers: {
              'Content-Type': 'application/json'
          }
      })
    

      console.log(data.picture[0])
  }

  return (
    <div>
        <h1>New Image Upload</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} type="text" name="title" />
            <input {...register("picture")} type="file" accept="image/*" name="picture"/>
            <button>Process</button>
        </form>
    </div>
  )
}

export default NewForm;
