import React from 'react';
import { useForm } from "react-hook-form";
import InputField from '../input/InputField';
import Textarea from '../input/Textarea';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = e => {
        console.log(e)
        e.target.reset();
    };
  return (
    <div className='px-10 md:px-20 py-20'>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 bg-white p-[20px] space-y-4 rounded-md">
              <div className='grid gap-6'>
                  <InputField label={"Name"} errors={errors} register={register} name={"name"} type={"text"} placeholder={"Your Name"} />
                  <InputField label={"Phone"} errors={errors} register={register} name={"phone"} type={"tel"} placeholder={"Your Phone Number"} />
                  <InputField label={"Email"} errors={errors} register={register} name={"email"} type={"email"} placeholder={"Your Email "} />
                  <Textarea label={"Message"} errors={errors} register={register} name={"message"} />
              </div>
              <div className="space-x-4">
                  <input type="submit" value="Submit" className="bg-yellow-400  font-semibold text-white px-6 py-3 rounded-md" />
              </div>
          </form>
    </div>
  )
}

export default Contact