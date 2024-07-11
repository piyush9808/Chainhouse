import React from 'react';
import { useForm } from 'react-hook-form';

function ImageForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.image[0]); // Handle the image data here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        {...register('image')}
        onChange={(e) => {
          // Handle the image change here
        }}
      />
      <input type="submit" />
    </form>
  );
}

export default ImageForm;
