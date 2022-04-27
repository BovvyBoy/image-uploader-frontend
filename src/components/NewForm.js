import React from 'react'
import { useForm } from "react-hook-form";

function NewForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log(data.picture)
  }

  return (
    <div>
        <h1>New Image Upload</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("picture")} type="file" name="picture"/>
            <button>Process</button>
        </form>
    </div>
  )
}

export default NewForm;